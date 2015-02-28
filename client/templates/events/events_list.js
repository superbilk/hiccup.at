Template.eventsList.helpers({
  upcomingEvents: function() {
    return Events.find({ dateBegin: {
      $exists: true,
      $gte: new Date() }}, {
      sort: { dateBegin: 1 }});
  }
});
