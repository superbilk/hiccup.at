Meteor.startup(function() {
  if (Meteor.isClient){
    return SEO.config({
      title: 'hiccup.at',
      meta: {
        'description': '',
        'google-site-verification': "89mf5oFKnjb9_uQNchsJAvBcvKktkjeRc-rS4AERqsg"
      }
    });
  }
});
