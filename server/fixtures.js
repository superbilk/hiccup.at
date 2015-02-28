Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {

    var albert = Meteor.users.insert({
      profile : { name: "Albert" },
      services : {
        twitter : {
          "profile_image_url" : "http://dummyimage.com/48x48&text=A",
          "profile_image_url_https" : "https://dummyimage.com/48x48&text=A",
          "screenName" : "albertTwitter"
        },
      }
    });

    var barney = Meteor.users.insert({
      profile : { name: "Barney" },
      services : {
        twitter : {
          "profile_image_url" : "http://dummyimage.com/48x48&text=B",
          "profile_image_url_https" : "https://dummyimage.com/48x48&text=B",
          "screenName" : "barneyTwitter"
        },
      }
    });

    var claus = Meteor.users.insert({
      profile : { name: "claus" },
      services : {
        twitter : {
          "profile_image_url" : "http://dummyimage.com/48x48&text=C",
          "profile_image_url_https" : "https://dummyimage.com/48x48&text=C",
          "screenName" : "clausTwitter"
        },
      }
    });
  }


  if (Events.find().count() === 0) {

    Events.insert({
      title: 'beyond tellerrand',
      slug: 'bt-dus-2015',
      url: 'http://beyondtellerrand.com',
      dateBegin: new Date("2015-05-11T00:00:00Z"),
      dateEnd: new Date("2015-05-13T00:00:00Z"),
      attendants: [
        {
          _id: albert,
          screenName: Meteor.users.findOne(albert).services.twitter.screenName,
          profile_image_url: Meteor.users.findOne(albert).services.twitter.profile_image_url
        },
        {
          _id: barney,
          screenName: Meteor.users.findOne(barney).services.twitter.screenName,
          profile_image_url: Meteor.users.findOne(barney).services.twitter.profile_image_url
        },
        {
          _id: claus,
          screenName: Meteor.users.findOne(claus).services.twitter.screenName,
          profile_image_url: Meteor.users.findOne(claus).services.twitter.profile_image_url 
        },
      ]
    });

    Events.insert({
      title: 'Webworker NRW',
      slug: 'wwnrw-17',
      url: 'http://webworker-nrw.de'
    });

    Events.insert({
      title: 'Lean DUS #4',
      slug: 'leandus-4',
      url: 'http://leandus.de',
      dateBegin: new Date("2015-01-28T18:00:00Z"),
      dateEnd: new Date("2015-01-28T22:00:00Z")
    });

    Events.insert({
      title: 'Lean UX DUS #3',
      slug: 'leanuxdus-3',
      url: 'http://leanuxdus.de',
      dateBegin: new Date("2015-02-24T18:00:00Z"),
      dateEnd: new Date("2015-02-24T22:00:00Z")
    });

  }
});
