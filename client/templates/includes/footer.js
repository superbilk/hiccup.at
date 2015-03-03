Template.footer.events({
  'click a#openImprintModal': function(event){
    event.preventDefault();
    $('#imprintModal').modal('show');
  }
});
