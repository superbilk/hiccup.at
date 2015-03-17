getUserLanguage = function () {
  // Put here the logic for determining the user language

  var lang = 'en';
  accountsUIBootstrap3.setLanguage(lang);
  moment.locale(lang);

  return lang;
};
