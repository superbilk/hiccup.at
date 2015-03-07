Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  Meteor.startup(function () {
    Events._ensureIndex({ "slug": 1 }, { unique: true });
  });
}

Events.deny({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  }
});

Meteor.methods({
  joinEvent: function(currentEvent) {
    check(currentEvent, Object);
    var attendant = {
      _id: Meteor.user()._id,
      twitterName: Meteor.user().profile.twitterName,
      twitterImage: Meteor.user().profile.twitterImage,
      dateTimeJoined: new Date()
    };
    if (_.find(currentEvent.attendants,
      function(att) {
        return att._id === Meteor.user()._id;
      })
    ) {
      // nothing
    } else {
      Events.update(currentEvent, { $addToSet: { attendants: attendant }} );
    }
  },
  leaveEvent: function(currentEvent) {
    check(currentEvent, Object);
    Events.update(currentEvent, {
      $pull: { attendants: { _id: Meteor.userId() }}
    });
  }
});
