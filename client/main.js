accountsUIBootstrap3.setLanguage('de');

moment.locale("de");

Meteor.Spinner.options = {
    // lines: 13, // The number of lines to draw
    // length: 10, // The length of each line
    // width: 5, // The line thickness
    // radius: 15, // The radius of the inner circle
    // corners: 0.7, // Corner roundness (0..1)
    // rotate: 0, // The rotation offset
    // direction: 1, // 1: clockwise, -1: counterclockwise
    // color: '#fff', // #rgb or #rrggbb
    // speed: 1, // Rounds per second
    // trail: 60, // Afterglow percentage
    // shadow: true, // Whether to render a shadow
    // hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent in px
    left: '50%' // Left position relative to parent in px
};

Alerts.defaultOptions.autoHide = 6000;
Alerts.defaultOptions.fadeIn = 600;
Alerts.defaultOptions.fadeOut = 600;
// defaultOptions: {
//
//      /**
//       * Button with cross icon to hide (close) alert
//       */
//      dismissable: true,
//
//      /**
//       * CSS classes to be appended on each alert DIV (use space for separator)
//       */
//      classes: '',
//
//      /**
//       * Hide alert after delay in ms or false to infinity
//       */
//      autoHide: false,
//
//      /**
//       * Time in ms before alert fully appears
//       */
//      fadeIn: 200,
//
//      /**
//       * If autoHide enabled then fadeOut is time in ms before alert disappears
//       */
//      fadeOut: 600,
//
//      alertsLimit : 3
//  }
// Example: Alerts.defaultOptions.alertsLimit = 1;

nextEventCountdown = function() {
  var nextEvent = Events.findOne({ dateBegin: {
    $exists: true,
    $gte: new Date() }}, {
    sort: { dateBegin: 1 }}
  );
  var countdown = moment(nextEvent.dateBegin).add(1, 'days').startOf('day').fromNow();
  Session.set("countdown", countdown);
};
