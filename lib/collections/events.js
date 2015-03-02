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
    Events.update(currentEvent, { $push: { attendants: attendant }} );
  },
  leaveEvent: function(currentEvent) {
    check(currentEvent, Object);
    Events.update(currentEvent, {
      $pull: { attendants: { _id: Meteor.userId() }}
    });
  }
});
