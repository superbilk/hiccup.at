Meteor.publish('upcomingEvents', function() {
  return Events.find(
    { dateEnd:
      { $exists: true,
        $gte: new Date()
      }
    },
    {
      sort: { dateBegin: 1 },
      fields: {
        title: true,
        slug:true,
        logoImage: true,
        dateBegin: true,
        dateEnd: true,
        attendants: true
      }
  });
});

Meteor.publish('fullEvent', function(slug) {
  check(slug, String);
  return Events.find({ slug: slug });
});
