Template.eventItem.helpers({
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

Template.eventItem.events({
  'click button.join': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      $('#signInModal').modal('show');
      // Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('joinEvent', this, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        };
        twttr.widgets.load(this.firstNode);
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

Template.eventItem.rendered = function() {
  setTimeout(function() {
    window.twttr.widgets.load(this.firstNode);
  }, 0);
};

Template.attendant.helpers({
  myTwitterAccount: function() {
    return this._id === Meteor.userId();
  }
});
