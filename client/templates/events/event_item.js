Template.eventItem.helpers({
  attendantsCount: function() {
    return this.attendants.length.toString();
  },
  currentUserAttending: function() {
    return _.find(this.attendants, function(attendant){
      return attendant._id === Meteor.user()._id;
    });
  }
});

Template.eventItem.events({
  'click button.join': function(event){
    event.preventDefault();
    Meteor.call('joinEvent', this, function(error, result) {});
  },
  'click button.leave': function(event){
    event.preventDefault();
    Meteor.call('leaveEvent', this, function(error, result) {});
  }
});
