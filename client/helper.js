Template.registerHelper('formatDate', function(date) {
  if (date) {
    return moment(date).format('DD.MM.YYYY');
  }
});

Template.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});
