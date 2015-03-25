Meteor.users.deny({
  update: function () { return true; },
  insert: function () { return true; },
  remove: function () { return true; }
});


Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};

  if (user.services.twitter) {
    user.profile.twitterName = user.services.twitter.screenName;
    user.profile.twitterImage = user.services.twitter.profile_image_url_https;
  };

  Email.send({
    from: "hello@hiccup.at",
    to: "hello@hiccup.at",
    subject: "New User signup",
    text: "https://twitter.com/@" + user.services.twitter.screenName
  });

  console.log("New user signup:", user.services.twitter.screenName);
  return user;
});

Accounts.onLogin(function(options){
  // console.log(options);
  // console.log("twitterId:", options.user.services.twitter.id);
  // console.log("_id:", options.user._id);
  // console.log("twittername:", options.user.profile.twitterName);
  // console.log("loggedin");
  Events.update(
    {
      "attendants._id": options.user.services.twitter.id
    },
    { $set: { "attendants.$._id": options.user._id }},
    { multi: true }
    );
});
