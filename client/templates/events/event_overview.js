Template.eventOverview.helpers({
  attendantsCount: function() {
    if (this.attendants === undefined) {
      return 0;
    }
    else {
      return this.attendants.length;
    }
  },
  currentUserAttending: function() {
    var found =  _.find(this.attendants, function(attendant){
      return attendant._id === Meteor.userId();
    });
    return found;
  }
});

Template.eventOverview.events({
  'click button.join': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Session.set("joinIntent", this);
      $('#signInModal').modal('show');
    }
    else {
      Meteor.call('joinEvent', this, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        };
      });
    }
  },
  'click a.leave': function(event){
    event.preventDefault();

    var currentEvent = Template.parentData(0);

    if (!Meteor.user()) {
      Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('leaveEvent', currentEvent, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        };
      });
    }
  }
});

Template.eventOverview.rendered = function() {
};
