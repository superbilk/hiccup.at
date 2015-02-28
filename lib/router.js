Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  waitOn: function() {
    return [Meteor.subscribe('events'),Meteor.subscribe("users")];
  }
});

Router.route('/', {
  name: 'home'
});

// Router.route('/events/:_id', {
//   name: 'eventPage',
//   data: function() { return Events.findOne(this.params._id); }
// });

Router.onBeforeAction('dataNotFound', {only: 'home'});
