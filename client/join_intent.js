Tracker.autorun(function () {
  if (Meteor.user() && Session.get("joinIntent")) {
    var intent = Session.get("joinIntent");
    delete Session.keys["joinIntent"];
    Meteor.call('joinEvent', intent, function(error, result) {
      if (error) {
        Alerts.add(error.message);
      };
      Router.go('eventPage', { slug: intent.slug });
    });
  }
});
