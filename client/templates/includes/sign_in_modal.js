Template.signInModal.events({
  'click button': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      $('#signInModal').modal('hide');
    }
  }
});
