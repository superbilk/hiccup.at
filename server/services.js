Meteor.startup(function () {
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: Meteor.settings.twitter.consumerKey,
        loginStyle: "popup",
        secret: Meteor.settings.twitter.secret
      }
    }
  );
});
