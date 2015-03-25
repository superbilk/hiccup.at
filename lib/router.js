Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  waitOn: function() {
    return Meteor.subscribe('upcomingEvents', function onReady() {
      TAPi18n.setLanguage(getUserLanguage());
      nextEventCountdown();
      Meteor.setInterval(nextEventCountdown, 1000*60*12);
    });
  }
});

Router.route('/', {
  name: "eventsList",
  waitOn: function() {
    return Meteor.subscribe('upcomingEvents');
  },
  data: { upcomingEvents: Events.find({
      dateEnd: {
        $exists: true,
        $gte: new Date()
      }}, {
      sort: { dateBegin: 1 }
    })
  }
});

Router.route('/events/:slug', {
  name: 'eventPage',
  waitOn: function() {
      return Meteor.subscribe('fullEvent', this.params.slug);
    },
  data: function() {
    return Events.findOne({ slug: this.params.slug });
  },
  onAfterAction: function() {
    // The SEO object is only available on the client.
    // Return if you define your routes on the server, too.
    if (!Meteor.isClient) {
      return;
    }
    var evt = this.data();
    SEO.set({
      title: evt.title + " | hiccup.at",
      meta: {
        'description': ''
      }
    });
  }
});

// Router.route('/events/:slug/edit', {
//   name: 'eventEdit',
//   data: function() {
//     return Events.findOne({ slug: this.params.slug });
//   }
// });

// Router.route('/submit', { name: 'eventSubmit' });

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

// Router.onBeforeAction(requireLogin, { only: [ 'eventEdit', 'eventSubmit' ]});
Router.onBeforeAction('dataNotFound', { only: "eventPage" });
