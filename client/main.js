accountsUIBootstrap3.setLanguage('de');

moment.locale("de");

Alerts.defaultOptions.autoHide = 6000;
Alerts.defaultOptions.fadeIn = 600;
Alerts.defaultOptions.fadeOut = 600;
// defaultOptions: {
 //  * Button with cross icon to hide (close) alert
 // dismissable: true,
 //  * CSS classes to be appended on each alert DIV (use space for separator)
 // classes: '',
 //  * Hide alert after delay in ms or false to infinity
 // autoHide: false,
 //  * Time in ms before alert fully appears
 // fadeIn: 200,
 //  * If autoHide enabled then fadeOut is time in ms before alert disappears
 // fadeOut: 600,
 // alertsLimit : 3
// Example: Alerts.defaultOptions.alertsLimit = 1;

nextEventCountdown = function() {
  var nextEvent = Events.findOne({ dateBegin: {
    $exists: true,
    $gte: new Date() }}, {
    sort: { dateBegin: 1 }}
  );
  var countdown = moment(nextEvent.dateBegin).fromNow();
  Session.set("countdown", countdown);
};
