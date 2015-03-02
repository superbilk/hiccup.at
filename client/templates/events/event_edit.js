Template.eventEdit.rendered = function() {
  console.log(moment.utc(this.data.dateBegin).format());
  $('#datetimepickerBegin').datetimepicker({
    locale: 'de',
    // minDate: moment(),
    sideBySide: true,
    stepping: 15,
    defaultDate: moment.utc(this.data.dateBegin).format()
  });
  $('#datetimepickerEnd').datetimepicker({
    locale: 'de',
    // minDate: moment(),
    sideBySide: true,
    stepping: 15,
    defaultDate: moment.utc(this.data.dateEnd).format()
  });
  $("#datetimepickerBegin").on("dp.change", function (e) {
    $('#datetimepickerEnd').data("DateTimePicker").minDate(e.date);
  });
  $("#datetimepickerEnd").on("dp.change", function (e) {
    $('#datetimepickerBegin').data("DateTimePicker").maxDate(e.date);
  });
};
