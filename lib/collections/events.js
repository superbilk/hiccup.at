Events = new Mongo.Collection('events');

Events.allow({
  update: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Meteor.methods({
  joinEvent: function(currentEvent) {
    var user = Meteor.user();
    var attendant = {
      _id: user._id,
      screenName: user.services.twitter.screenName,
      profile_image_url: user.services.twitter.profile_image_url
    };
    Events.update(currentEvent, { $push: { attendants: attendant }} );
  },
  leaveEvent: function(currentEvent) {
    var user = Meteor.user();
    Events.update(currentEvent, { $pull: { attendants: { _id: user._id }}} );
  }
});
