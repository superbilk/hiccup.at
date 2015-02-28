Meteor.startup(function () {
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: Credentials.twitter.consumerKey,
        loginStyle: "popup",
        secret: Credentials.twitter.secret
      }
    }
  );
});
