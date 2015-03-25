// http://stackoverflow.com/questions/16100123/embed-javascript-widget-in-meteor-template
Template.followButton.rendered = function() {
  setTimeout(function() {
    // console.log("render");
    // console.log(typeof twttr);
    if (typeof twttr !== "undefined") {
      twttr.widgets.load(this.firstNode);
    };
  }, 0);
};
