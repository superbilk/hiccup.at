Template.eventSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var event = {
      title: $(e.target).find('[name=title]').val(),
      slug: $(e.target).find('[name=slug]').val(),
      url: $(e.target).find('[name=url]').val(),
      twitterOrganizer: $(e.target).find('[name=twitterOrganizer]').val(),
      twitterOrganizerImage: $(e.target).find('[name=twitterOrganizerImage]').val(),
      logoImage: $(e.target).find('[name=logoImage]').val(),
      dateBegin: $(e.target).find('[name=dateBegin]').val(),
      dateEnd: $(e.target).find('[name=dateEnd]').val(),
    };

    Meteor.call('eventInsert', event, function(error, result) {
      // display the error to the user and abort
      if (error) {
        Alerts.add(error.message);
      } else {
        Router.go('eventPage', { slug: event.slug });
      }
    });
  }
});

Template.eventSubmit.rendered = function() {
  $('#datetimepickerBegin').datetimepicker({
    locale: 'de',
    // minDate: moment(),
    sideBySide: true,
    stepping: 15
  });
  $('#datetimepickerEnd').datetimepicker({
    locale: 'de',
    // minDate: moment(),
    sideBySide: true,
    stepping: 15
  });
  $("#datetimepickerBegin").on("dp.change", function (e) {
    $('#datetimepickerEnd').data("DateTimePicker").minDate(e.date);
  });
  $("#datetimepickerEnd").on("dp.change", function (e) {
    $('#datetimepickerBegin').data("DateTimePicker").maxDate(e.date);
  });
};
