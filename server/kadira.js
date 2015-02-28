Meteor.startup(function () {
  Kadira.connect(Credentials.kadira.appId, Credentials.kadira.appSecret);
});
