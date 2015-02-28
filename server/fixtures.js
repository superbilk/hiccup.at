if (Meteor.users.find().count() === 1) {

  Meteor.users.insert({
    "createdAt" : new Date(),
    "profile" : { "name" : "Peter" },
    "services" :
      { "resume" :
        { "loginTokens" : [ 	{
          "when" : new Date("2015-02-28T00:34:59.247Z"),
          "hashedToken" : "mFytH7c5M6HDApsIVIv4iBCBM3aUlXUrxWfeusCB+BIOQ=" }
        ]},
        "twitter" : {
          "accessToken" : "2009121-OjyBGUIBVibisZRi9JiwYAofUOnwQ6jkTz56PxEOvqn",
          "accessTokenSecret" : "lNdgrn5KbCBOBKS1ylzx7Lm1mjuicidpQEoEojN1Qd9t",
          "id" : "200915132",
          "lang" : "en",
          "profile_image_url" : "http://pbs.twimg.com/profile_images/523212400447983616/CG1S0B_g_normal.jpeg",
          "profile_image_url_https" : "https://pbs.twimg.com/profile_images/523212400447983616/CG1S0B_g_normal.jpeg",
          "screenName" : "peterbilk"
        }
      }
  });
}


if (Events.find().count() === 0) {

  Events.insert({
    title: 'beyond tellerrand',
    slug: 'bt-dus-2015',
    url: 'http://beyondtellerrand.com',
    dateBegin: new Date("2015-05-11T00:00:00Z"),
    dateEnd: new Date("2015-05-13T00:00:00Z")
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
