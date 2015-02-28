Template.eventItem.helpers({
  attendantsCount: function() {
    return this.attendants.length.toString();
  },
  currentUserAttending: function() {
    return _.find(this.attendants, function(attendant){
      if (Meteor.user()) {
        return attendant._id === Meteor.user()._id;
      }
      else {
        return false;
      }
    });
  }
});

Template.eventItem.events({
  'click button.join': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('joinEvent', this, function(error, result) {
        if (error) {
          Alerts.add("Es ist ein Fehler aufgetreten");
        }
      });
    }
  },
  'click button.leave': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('leaveEvent', this, function(error, result) {
        if (error) {
          Alerts.add("Es ist ein Fehler aufgetreten");
        }
      });
    }
  }
});
