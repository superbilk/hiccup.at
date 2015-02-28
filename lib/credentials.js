if (Meteor.isServer) {
  Credentials = {}
  Credentials = JSON.parse(Assets.getText('credentials.json'));
};
