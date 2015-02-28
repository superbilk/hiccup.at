var credentials = JSON.parse(Assets.getText('credentials.json'));

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: credentials.twitter.consumerKey,
      loginStyle: "popup",
      secret: credentials.twitter.secret
    }
  }
);
