Meteor.startup(function() {
  if (Meteor.isClient){
    return SEO.config({
      title: 'hiccup.at',
      meta: {
        'description': ''
      }
    });
  }
});
