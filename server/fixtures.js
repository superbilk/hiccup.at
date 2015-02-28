Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {

    var albert = Meteor.users.insert({
      profile : {
        name: "Albert",
        twitterName: "sipgateDE",
        twitterImage: "http://dummyimage.com/48x48&text=A"
      }
    });

    var barney = Meteor.users.insert({
      profile : {
        name: "Barney",
        twitterName: "barneyTwitter",
        twitterImage: "http://dummyimage.com/48x48&text=B"
      }
    });

    var claus = Meteor.users.insert({
      profile : {
        name: "claus",
        twitterName: "clausTwitter",
        twitterImage: "http://dummyimage.com/48x48&text=C"
      }
    });
  }

  if (Events.find().count() === 0) {

    Events.insert({
      title: 'beyond tellerrand',
      slug: 'bt-dus-2015',
      url: 'http://beyondtellerrand.com',
      logoImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      dateBegin: moment(new Date("2015-05-11T00:00:00Z")).format("DD.MM.YYYY"),
      dateEnd: new Date("2015-05-13T00:00:00Z"),
      attendants: [
        {
          _id: albert,
          twitterName: Meteor.users.findOne(albert).profile.twitterName,
          twitterImage: Meteor.users.findOne(albert).profile.twitterImage
        },
        {
          _id: barney,
          twitterName: Meteor.users.findOne(barney).profile.twitterName,
          twitterImage: Meteor.users.findOne(barney).profile.twitterImage
        },
        {
          _id: claus,
          twitterName: Meteor.users.findOne(claus).profile.twitterName,
          twitterImage: Meteor.users.findOne(claus).profile.twitterImage
        },
      ]
    });

    Events.insert({
      title: 'Webworker NRW',
      slug: 'wwnrw-17',
      url: 'http://webworker-nrw.de',
      logoImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      attendants: [
        {
          _id: barney,
          twitterName: Meteor.users.findOne(barney).profile.twitterName,
          twitterImage: Meteor.users.findOne(barney).profile.twitterImage
        },
        {
          _id: claus,
          twitterName: Meteor.users.findOne(claus).profile.twitterName,
          twitterImage: Meteor.users.findOne(claus).profile.twitterImage
        }
      ]
    });

    Events.insert({
      title: 'Lean DUS #4',
      slug: 'leandus-4',
      url: 'http://leandus.de',
      logoImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      dateBegin: moment(new Date("2015-05-11T00:00:00Z")).format("DD.MM.YYYY"),
      dateEnd: new Date("2015-04-28T22:00:00Z")
    });

    Events.insert({
      title: 'Lean UX DUS #3',
      slug: 'leanuxdus-3',
      url: 'http://leanuxdus.de',
      logoImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      dateBegin: new Date("2015-02-24T18:00:00Z"),
      dateEnd: new Date("2015-02-24T22:00:00Z")
    });

  }
});
