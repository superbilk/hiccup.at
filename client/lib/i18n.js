getUserLanguage = function () {
  // Put here the logic for determining the user language

  var lang = 'en';
  accountsUIBootstrap3.setLanguage(lang);
  moment.locale(lang);

  return lang;
};

// if (Meteor.isClient) {
//   Meteor.startup(function () {
//     Session.set("showLoadingIndicator", true);
//
//     TAPi18n.setLanguage(getUserLanguage())
//       .done(function () {
//         Session.set("showLoadingIndicator", false);
//       })
//       .fail(function (errorMessage) {
//         // Handle the situation
//         console.log(error_message);
//       });
//   });
// }
