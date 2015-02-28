Meteor.publish('events', function() {
  return Events.find();
});

Meteor.publish("users", function () {
    return Meteor.users.find({}, {
                              fields: {
                                "profile.name":  1,
                                "services.twitter.screenName" : 1,
                                "services.twitter.profile_image_url" : 1
                              }
                              });
});
