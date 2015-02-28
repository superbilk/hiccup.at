Meteor.startup(function () {
  var credentials = JSON.parse(Assets.getText('credentials.json'));
  process.env.MAIL_URL = 'smtp://' + credentials.sendgrid.username + ':' + credentials.sendgrid.password + '@smtp.sendgrid.net:587';
});
