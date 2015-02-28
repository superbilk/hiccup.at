Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  waitOn: function() {
    return Meteor.subscribe('events');
  }
});

Router.route('/', {
  name: "eventsList"
});

Router.route('/events/:slug', {
  name: 'eventPage',
  data: function() {
    return Events.findOne({ slug: this.params.slug });
  }
});

// var requireLogin = function() {
//   if (! Meteor.user()) {
//     this.render('accessDenied');
//   } else {
//     this.next();
//   }
// };
//
// Router.onBeforeAction(requireLogin, { only: 'eventPage' });
Router.onBeforeAction('dataNotFound', { only: "eventPage" });
