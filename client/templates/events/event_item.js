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
