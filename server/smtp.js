Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://' + Meteor.settings.sendgrid.username + ':' + Meteor.settings.sendgrid.password + '@smtp.sendgrid.net:587';
});
