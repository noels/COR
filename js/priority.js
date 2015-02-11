(function($) {

  var prioritySkillsChartIds = [
    'Digital course completions', 
    'Commercial course completions', 
    'PPM course completions',
    'Leading and managing change course completions'
  ];


  function updateChart() {
    drawChart($('select#group').val());
  };


  function populateSelector() {
    prioritySkillsChartIds.forEach(function(s) {
      $('select#group').append('<option value="' + s + '">' + s + '</option>');
    });

    $('select#group').change(updateChart)
  };

  window.onLibsReady = function () {
    $(function () {
      populateSelector();
      updateChart();
    });
  };

})(jQuery);

