Template.eventEdit.rendered = function() {
  $('#datetimepicker').datetimepicker({
    defaultDate: moment(this.data.dateBegin).format("DD.MM.YYYY"),
    format: "DD.MM.YYYY"
  });
};
