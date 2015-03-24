Template.navbar.helpers({
  allEvents: function() {
    return Events.find({}, { sort: { dateBegin: -1 }} );
  }
});

Template.navbar.events({
  'click a.lang': function(event){
    event.preventDefault();
    TAPi18n.setLanguage(this.tag);
  }
});

// Template.i18n_navbar_dropdown.helpers({
//   langActive: function(cur) {
//     console.log(TAPi18n.getLanguage());
//     console.log(cur);
//     return (TAPi18n.getLanguage() === cur)?'active':'';
//   }
// });
