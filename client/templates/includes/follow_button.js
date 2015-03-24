// http://stackoverflow.com/questions/16100123/embed-javascript-widget-in-meteor-template
Template.followButton.rendered = function() {
  setTimeout(function() {
    if (typeof twttr !== "undefined") {
      twttr.widgets.load(this.firstNode);
    };
  }, 0);
};
