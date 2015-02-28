Template.eventsList.helpers({
  allEvents: function() {
    return Events.find();
  }
});

Template.eventsList.rendered = function() {
};
