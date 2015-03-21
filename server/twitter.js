Twit = Meteor.npmRequire('twit');

Twitter = new Twit({
  "consumer_key":         Meteor.settings.twitter.consumerKey,
  "consumer_secret":      Meteor.settings.twitter.consumerSecret,
  "access_token":         Meteor.settings.twitter.accessToken,
  "access_token_secret":  Meteor.settings.twitter.accessTokenSecret
});

// T.get('users/show', { screen_name: 'superbilk' }, function(err, data, response) {
//   console.log(data);
// });
