Template.eventsList.helpers({
  upcomingEvents: function() {
    return Events.find({ dateBegin: {
      $exists: true,
      $gte: new Date() }}, {
      sort: { dateBegin: 1 }});
  },
  eventCountdown: function() {
    return Session.get("countdown");
  }
});


// Meteor.setInterval(nextEventCountdown, 1000);

// Meteor.startup(function () {
//   delete Session.keys["countdown"];
//   console.log("startup");
//   nextEventCountdown;
// });
