(function($) {
    var leaf = [{}];
    var root = null;

    function _addMindmapNodes(chartNode, mindMapNode) {
       var keys = Object.keys(chartNode);

        for (var keyIndex in keys) {
            var key = keys[keyIndex];
            var _processFunction = function (key) {
                leaf = chartNode[key] || [{}];
                $('#chart_title').html(key);
                populateSelector(leaf);
                $('#overlay').fadeIn(200,function(){
                    $('#chart_box').show();
                    updateChart();
                });

            };
            var thisNode = $('#overview').addNode(mindMapNode, key, {
                href: '#',
                url: '#',
                noop: true,
                onclick: function (node) {
                  _processFunction(node.name);
                }
            });
        }
        return true;
    }


    function drawOverviewDiagram() {
        $('#overview').mindmap({
            timeperiod: 15

        });
        $('#chart_close').click(function(){
            $('#chart_box').hide();
            $('#overlay').fadeOut('fast');
            root.obj.activeNode.el.removeClass('active');
            root.obj.activeNode = root;
            root.obj.activeNode.el.addClass('active');
            root.animateToStatic();
        });

        // root node
        root = $('#overview').addRootNode('Game Changers', {
            href: '#',
            url: '#',
            container: '#overview',
            onclick: function (node) {
                $(node.obj.activeNode.content).each(function () {
                    this.hide();
                });
            }
        });
        root.mindmapInit = true;
        _addMindmapNodes(charts, root);
        root.mindmapInit = false;
        root.animateToStatic();


    }

  var chartIds = [
  ];


  function updateChart() {
    drawChart($('select#group').val());
  };


  function populateSelector(chartNode) {
    var keys = Object.keys(chartNode);
      $('select#group').empty();
    for (var keyIndex in keys) {
      $('select#group').append('<option value="' + keys[keyIndex] + '">' +  keys[keyIndex] + '</option>');
    }

    $('select#group').change(updateChart)
  };

  window.onLibsReady = function () {
      drawOverviewDiagram();
      $("#chart_container").unbind().click(function () {
        //$("#chart_container").hide();
        //$('#chart_container_holder').hide();
    });
  };

})(jQuery);

