Template.addAttendee.events({
  'submit form': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Session.set("joinIntent", this);
      $('#signInModal').modal('show');
    }
    else {
      var user = event.target.twitterUsername.value.replace("@", "");
      Meteor.call('addAttendee', user, this, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        } else {
          event.target.twitterUsername.value = "";
        };
      });
    }
  }
});
