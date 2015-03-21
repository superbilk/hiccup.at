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

NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length > 0;
});

if (Meteor.isServer) {
  Meteor.methods({
    eventInsert: function(eventAttributes) {
      check(eventAttributes, {
        title: String,
        slug: String,
        url: String,
        twitterOrganizer: String,
        twitterOrganizerImage: String,
        logoImage: String,
        dateBegin: Match.Any,
        dateEnd: Match.Any
      });
      check(eventAttributes, {
        title: NonEmptyString,
        slug: NonEmptyString,
        url: NonEmptyString,
        twitterOrganizer: NonEmptyString,
        twitterOrganizerImage: NonEmptyString,
        logoImage: NonEmptyString,
        dateBegin: NonEmptyString,
        dateEnd: NonEmptyString
      });

      var event = _.extend(eventAttributes, {
        ownerId: Meteor.userId,
        submitted: new Date()
      });

      Events.insert(event);
    },
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
    },
    addAttendee: function(twitterUsername, currentEvent){
      check(twitterUsername, NonEmptyString);
      check(currentEvent, Object);
      // console.log(twitterUsername);
      // console.log(currentEvent);
      Twitter.get('users/show', { screen_name: twitterUsername },
        Meteor.bindEnvironment(function(err, data, response) {
          var attendant = {
            _id: data.id_str,
            twitterName: data.screen_name,
            twitterImage: data.profile_image_url_https,
            dateTimeJoined: new Date()
          };
          if (_.find(currentEvent.attendants,
            function(att) {
              return (att._id === attendant._id || att.twitterName === attendant.twitterName);
            })
          ) {
            // nothing
          } else {
            Events.update(currentEvent, { $addToSet: { attendants: attendant }} );
          }
        })
      );
    }
  });
};
