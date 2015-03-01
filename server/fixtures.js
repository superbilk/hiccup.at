Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {

    var justin = Meteor.users.insert({
      profile : {
        name: "Justin",
        twitterName: "justinbieber",
        twitterImage: "https://pbs.twimg.com/profile_images/567185870394904577/d31-qVyv_400x400.jpeg"
      }
    });

    var kim = Meteor.users.insert({
      profile : {
        name: "Kim",
        twitterName: "KimKardahian",
        twitterImage: "https://pbs.twimg.com/profile_images/2344348679/d7fhjj1t1mms16iq0m1p_400x400.jpeg"
      }
    });

    var bill = Meteor.users.insert({
      profile : {
        name: "Bill",
        twitterName: "BillGates",
        twitterImage: "https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg"
      }
    });
  }

  if (Events.find().count() === 0) {

    Events.insert({
      title: 'beyond tellerrand',
      slug: 'bt-dus-2015',
      url: 'http://beyondtellerrand.com',
      logoImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      dateBegin: new Date("2025-05-11T00:00:00Z"),
      attendants: [
        {
          _id: justin,
          twitterName: Meteor.users.findOne(justin).profile.twitterName,
          twitterImage: Meteor.users.findOne(justin).profile.twitterImage
        },
        {
          _id: kim,
          twitterName: Meteor.users.findOne(kim).profile.twitterName,
          twitterImage: Meteor.users.findOne(kim).profile.twitterImage
        },
        {
          _id: bill,
          twitterName: Meteor.users.findOne(bill).profile.twitterName,
          twitterImage: Meteor.users.findOne(bill).profile.twitterImage
        },
      ]
    });

    Events.insert({
      title: 'Webworker NRW',
      slug: 'wwnrw-17',
      url: 'http://webworker-nrw.de',
      logoImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      dateBegin: new Date("2025-06-11T00:00:00Z"),
      attendants: [
        {
          _id: kim,
          twitterName: Meteor.users.findOne(kim).profile.twitterName,
          twitterImage: Meteor.users.findOne(kim).profile.twitterImage
        },
        {
          _id: bill,
          twitterName: Meteor.users.findOne(bill).profile.twitterName,
          twitterImage: Meteor.users.findOne(bill).profile.twitterImage
        }
      ]
    });

    Events.insert({
      title: 'Lean DUS #4',
      slug: 'leandus-4',
      url: 'http://leandus.de',
      logoImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      dateBegin: new Date("2025-04-11T00:00:00Z"),
    });

    Events.insert({
      title: 'Lean UX DUS #3',
      slug: 'leanuxdus-3',
      url: 'http://leanuxdus.de',
      logoImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      dateBegin: new Date("2025-07-11T00:00:00Z"),
    });

  }
});
