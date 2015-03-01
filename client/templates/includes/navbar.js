Template.navbar.helpers({
  allEvents: function() {
    return Events.find({}, { sort: { dateBegin: -1 }} );
    // return Events.find();
  }
});
