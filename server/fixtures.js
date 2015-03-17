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
      title: 'Webworker NRW',
      slug: 'wwnrw-17',
      url: 'http://webworker-nrw.de',
      twitterOrganizer: "wwnrw",
      twitterOrganizerImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      logoImage: "http://webworker-nrw.de/assets/images/WWNRW.png",
      dateBegin: new Date("2015-06-07T18:00:00Z"),
      dateEnd: new Date("2015-06-07T21:00:00Z"),
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
      dateBegin: new Date("2015-04-07T17:00:00Z"),
      dateEnd: new Date("2015-04-07T21:00:00Z"),
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
      title: 'Lean UX DUS #3',
      slug: 'leanuxdus-3',
      url: 'http://leanuxdus.de',
      twitterOrganizer: "LeanUXDUS",
      twitterOrganizerImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      logoImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      dateBegin: new Date("2015-08-07T17:00:00Z"),
      dateEnd: new Date("2015-08-07T21:00:00Z")
    });

    Events.insert({
      title: 'Lean UX DUS #123',
      slug: 'leanuxdus-123',
      url: 'http://leanuxdus.de',
      twitterOrganizer: "LeanUXDUS",
      twitterOrganizerImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      logoImage: "https://www.leandus.de/files/2015/01/logo-small-leanuxdus.png",
      dateBegin: new Date("2015-03-01T17:00:00Z"),
      dateEnd: new Date("2015-03-21T21:00:00Z")
    });

// ECHTE EVENTS

    Events.insert({
      title: 'Lean DUS - Dev Talks #2',
      slug: 'leandus-dev-2',
      url: 'http://leandus.de',
      twitterOrganizer: "Lean_DUS",
      twitterOrganizerImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      logoImage: "https://www.leanuxdus.de/files/2015/01/logo-small-leandus.png",
      dateBegin: new Date("2015-03-25T17:00:00Z"),
      dateEnd: new Date("2015-03-25T21:00:00Z"),
    });

    Events.insert({
      title: 'Meteor Cologne',
      slug: 'meteor-cologne-1',
      url: 'http://www.meetup.com/Meteor-Cologne/events/220454449/',
      twitterOrganizer: "DerMambo",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/378800000123289551/1f63258a55d204a327ac2b5a1bf1d673_400x400.jpeg",
      logoImage: "http://photos1.meetupstatic.com/photos/event/9/b/d/e/global_425859902.jpeg",
      dateBegin: new Date("2015-03-12T18:00:00 Z"),
      dateEnd: new Date("2015-03-12T21:00:00 Z")
    });

    Events.insert({
      title: 'Meteor Paris S02E05',
      slug: 'meteor-paris-S02E05',
      url: 'http://www.meetup.com/Meteor-Paris/events/220498616/',
      twitterOrganizer: "meteorjs",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/527039622434418688/uJPMDhZq_400x400.png",
      logoImage: "http://photos4.meetupstatic.com/photos/event/b/2/9/0/global_416205712.jpeg",
      dateBegin: new Date("2015-03-05T18:00:00 Z"),
      dateEnd: new Date("2015-03-05T21:30:00 Z")
    });

    Events.insert({
      title: 'beyond tellerrand',
      slug: 'bt-dus-2015',
      url: 'http://beyondtellerrand.com',
      twitterOrganizer: "btconf",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      logoImage: "https://pbs.twimg.com/profile_images/478502156589617152/7WDu9XsV.jpeg",
      dateBegin: new Date("2015-05-11T09:00:00Z"),
      dateEnd: new Date("2015-05-13T16:00:00Z"),
    });

    Events.insert({
      title: '2. Ansible Meetup Düsseldorf',
      slug: 'ansible-duesseldorf-2',
      url: 'http://www.meetup.com/Ansible-Meetup-Dusseldorf/events/220945485/',
      twitterOrganizer: "dictvm",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/512014618227523584/E_3IuDgo_400x400.jpeg",
      logoImage: "http://cdn2.hubspot.net/hub/330046/file-769078210-png/Official_Logos/ansible_logo_black_square_small.png",
      dateBegin: new Date("2015-03-18T18:00:00 Z"),
      dateEnd: new Date("2015-03-18T21:00:00 Z")
    });

    Events.insert({
      title: 'Barcamp Berlin',
      slug: 'barcamp-berlin',
      url: 'http://barcamp.berlin',
      twitterOrganizer: "barcampBER",
      twitterOrganizerImage: "https://pbs.twimg.com/profile_images/547158085538570240/u4DxIK6H_400x400.png",
      logoImage: "https://pbs.twimg.com/profile_images/547158085538570240/u4DxIK6H_400x400.png",
      dateBegin: new Date("2015-03-07T09:00:00 Z"),
      dateEnd: new Date("2015-03-08T17:00:00 Z")
    });

  }
});
