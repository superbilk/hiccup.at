Template.eventsList.helpers({
  upcomingEvents: function() {
    return Events.find({ dateEnd: {
      $exists: true,
      $gte: new Date() }}, {
      sort: { dateBegin: 1 }});
  },
  eventCountdown: function() {
    return Session.get("countdown");
  }
});
