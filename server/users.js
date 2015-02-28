Meteor.users.deny({
  update: function () { return true; }
});


Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    user.profile = options.profile;
  };

  user.profile.twitterName = user.services.twitter.screenName;
  user.profile.twitterImage = user.services.twitter.profile_image_url;

  return user;
});
