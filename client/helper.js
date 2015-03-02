Template.registerHelper('formatDate', function(date) {
  if (date) {
    return moment.utc(date).format('DD.MM.YYYY');
  }
});

Template.registerHelper('formatDateShort', function(date) {
  if (date) {
    return moment.utc(date).format('DD. MMMM - HH:mm[h]');
  }
});

Template.registerHelper('phoneScreen', function() {
  return screen.width <= 767;
});


Template.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});
