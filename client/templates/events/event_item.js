Template.eventItem.helpers({
  attendantsCount: function() {
    return this.attendants.length.toString();
  },
  currentUserAttending: function() {
    return _.find(this.attendants, function(attendant){
      if (Meteor.user()) {
        return attendant._id === Meteor.user()._id;
      }
      else {
        return false;
      }
    });
  }
});

Template.eventItem.events({
  'click button.join': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('joinEvent', this, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        };
        twttr.widgets.load(this.firstNode);
      });
    }
  },
  'click button.leave': function(event){
    event.preventDefault();
    if (!Meteor.user()) {
      Alerts.add("Bitte mit Twitter anmelden.");
    }
    else {
      Meteor.call('leaveEvent', this, function(error, result) {
        if (error) {
          Alerts.add(error.message);
        };
      });
    }
  }
});

Template.eventItem.rendered = function() {
  if (!window.twttr) {
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  }
  else {
    setTimeout(function() {
      window.twttr.widgets.load(this.firstNode);
    }, 0);
  };
};
