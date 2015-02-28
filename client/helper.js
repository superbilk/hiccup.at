Template.registerHelper('formatDate', function(date) {
  if (date)
    return moment(date).format('DD.MM.YYYY');
});
