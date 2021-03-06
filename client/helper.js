Template.registerHelper('formatDate', function(date) {
  if (date) {
    return moment(date).format('DD.MM.YYYY');
  }
});

Template.registerHelper('formatDateShort', function(date) {
  if (date) {
    return moment(date).format('DD. MMMM - HH:mm[h]');
  }
});

Template.registerHelper('formatTime', function(date) {
  if (date) {
    return moment(date).format('HH:mm[h]');
  }
});

Template.registerHelper('isToday', function() {
  var begin = moment(this.dateBegin).startOf('day');
  var end = moment(this.dateEnd).endOf('day');
  return moment().isBetween(begin, end);
});


Template.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});
