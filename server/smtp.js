Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://' + Credentials.sendgrid.username + ':' + Credentials.sendgrid.password + '@smtp.sendgrid.net:587';
});
