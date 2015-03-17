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
  return user;
});
