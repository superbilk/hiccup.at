Meteor.startup(function () {
  if (Meteor.isClient) {
    TAPi18n.setLanguage('de');
  }
});


Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  waitOn: function() {
    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
      });
    return Meteor.subscribe('events', function onReady() {
      nextEventCountdown();
      Meteor.setInterval(nextEventCountdown, 1000*60*12);
    });
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

Router.route('/events/:slug/edit', {
  name: 'eventEdit',
  data: function() {
    return Events.findOne({ slug: this.params.slug });
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, { only: "eventEdit" });
Router.onBeforeAction('dataNotFound', { only: "eventPage" });
