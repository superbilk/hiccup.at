Events = new Mongo.Collection('events');

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
    var attendant = {
      _id: Meteor.user()._id,
      twitterName: Meteor.user().profile.twitterName,
      twitterImage: Meteor.user().profile.twitterImage
    };
    Events.update(currentEvent, { $push: { attendants: attendant }} );
  },
  leaveEvent: function(currentEvent) {
    var user = Meteor.user();
    Events.update(currentEvent, { $pull: { attendants: { _id: user._id }}} );
  }
});
