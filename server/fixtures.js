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
        twitterName: "KimKardashian",
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
      twitterOrganizer: "beyondtellerrand",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      logoImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      dateBegin: new Date("2015-05-11T10:00:00Z"),
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
      twitterOrganizer: "wwnrw",
      twitterOrganizerImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      logoImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      dateBegin: new Date("2015-06-07T19:00:00Z"),
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
      twitterOrganizer: "Lean_DUS",
      twitterOrganizerImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      logoImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      dateBegin: new Date("2015-04-07T18:00:00Z"),
    });

    Events.insert({
      title: 'Lean UX DUS #3',
      slug: 'leanuxdus-3',
      url: 'http://leanuxdus.de',
      twitterOrganizer: "LeanUXDUS",
      twitterOrganizerImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      logoImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      dateBegin: new Date("2015-08-07T18:00:00Z"),
    });

    Events.insert({
      title: 'Meteor Cologne',
      slug: 'meteor-cologne-1',
      url: 'http://www.meetup.com/Meteor-Cologne/events/220454449/',
      twitterOrganizer: "DerMambo",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/378800000123289551/1f63258a55d204a327ac2b5a1bf1d673_400x400.jpeg",
      logoImage: "http://photos1.meetupstatic.com/photos/event/9/b/d/e/global_425859902.jpeg",
      dateBegin: new Date("2015-03-12T19:00:00Z"),
    });

  }
});
