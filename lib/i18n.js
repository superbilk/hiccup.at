getUserLanguage = function () {
  // Put here the logic for determining the user language

  var lang = headers.get('accept-language').slice(0, 2) || 'de';

  accountsUIBootstrap3.setLanguage(lang);
  moment.locale(lang);

  return lang;
};
