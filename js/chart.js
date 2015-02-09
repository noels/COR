var charts = {
  Capabilities: {
    Capabilities: [{chartType:"bar"}],
    Capabilities_1:null,
    Capabilities_2:null,
    Capabilities_3:[{vAxis: {format: "##%" }}],
    Capabilities_4:[{vAxis: {format: "##%" }}],
    Capabilities_5:null
  },
  Digital: {
    Digital_1:[{
      dataRange: "A1B6", 
      chartType:"pie"
    }],
    Digital_2:null,
    Digital_3:null,
    Digital_4:null,
    Digital_5:null,
    Digital_6:null,
    Digital_7:null,
    Digital_8:null
  },
  TW3: {
    TW3:null,
    TW3_1:null,
    TW3_2:null,
    TW3_3:null,
    TW3_4:null,
    TW3_5:null,
    TW3_6:null,
    TW3_7:null,
    TW3_8:null,
    TW3_9:null,
    TW3_10:null,
    TW3_11:null
  },
  OPM: {
    OPM:null,
    OPM_1:null
  },
  MPA: {
    MPA:null,
    MPA_1:null,
    MPA_2:null,
    MPA_3:null,
    MPA_4:null,
    MPA_5:null,
    MPA_6:null,
    MPA_7:null
  }
};


function _alertError(msg) {
  var div = $('<div class="error">' + msg + '</div>');
  $('#messages').append(div);
  setTimeout(function() {
    div.fadeOut(500);
  }, 2000);
};  


function drawChart(sheetName) {
  var range = 'range=A2:B100';

  $("#loading").show();
  $("#chart").hide();

  var chartOptions = charts[sheetName] || {};

  if (chartOptions.dataRange) {
    range = chartOptions.dataRange;
  }
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/19nKuPp1xQVWclduV1Jmfh1M67CgvloQh_PFpDMPs3Hk/edit?usp=sharing&' + range + '&sheet=' + sheetName);

  query.send(function(response) {
    handleQueryResponse(sheetName, response);
  });
}

function handleQueryResponse(sheetName, response) {
  if (!$('#loading').is(':visible')) {
    return;
  }

  if (response.isError()) {
      _alertError('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
  }

  var sheetName = $('#charts').val() || sheetName;

  var data = response.getDataTable();
  var formatter = new google.visualization.DateFormat({formatType: 'short'});
  formatter.format(data, 0);
  
  var chartOptions = charts[sheetName] || {};
  
  var chart;
  switch (chartOptions.chartType) {
    case 'pie':
      chart =  new google.visualization.PieChart(document.getElementById('chart'));
      break;
    case 'bar':
      chart = new google.visualization.ColumnChart(document.getElementById('chart'));
      break;
    default:
      chart = new google.visualization.LineChart(document.getElementById('chart'));
  }

  var options = {
    title: sheetName,
    chartArea: {
      width: '90%',
      height: '80%'
    },
    height: $('#chart_container').height() * 0.8,
    width: $('#chart_container').width() * 0.9,
    legend: { 
      position: 'none' 
    }
  };

  if (chartOptions.vAxis){
      options["vAxis"] = chartOptions.vAxis;
  }

  google.visualization.events.addListener(chart, 'ready', function(){
    $('#loading').hide();
    $("#chart").show();
  });

  chart.draw(data, options);
}


function _addMindmapNodes(chartNode, mindMapNode) {
  // if at a leaf then nothing to do
  if (!chartNode || chartNode instanceof Array) {
    return false;
  }

  var keys = Object.keys(chartNode);

  for (var keyIndex in keys) {
    var key = keys[keyIndex];

    var nodeIsLeaf = false;
    var _processNodeClick = function() {
      if (nodeIsLeaf) {
        drawChart(key);
        $('#chart_container_holder').show();
        $('#chart_container').show();
      } else {
        $('#chart_container_holder').hide();
        $('#chart_container').hide();
      }
    }

    var thisNode = $('body').addNode(mindMapNode, key, {
      href:'#',
      url:'#',
      onclick:function(node) {
        $(node.obj.activeNode.content).each(function() {
          this.hide();
        });
        $(node.content).each(function() {
          this.show();
        });

        _processNodeClick();
      }
    });
    
    if (!_addMindmapNodes(chartNode[key], thisNode)) {
      nodeIsLeaf = true;
    }
  }

  return true;
}


function drawOverviewDiagram() {
  var dataElem = $('#overview');
  
  $('body').mindmap({
    timeperiod: 20
  });

  // root node
  var root = $('body').addRootNode('Game Changers', {
    href:'#',
    url:'#',
    onclick:function(node) {
      $(node.obj.activeNode.content).each(function() {
        this.hide();
      });
    }
  });

  _addMindmapNodes(charts, root);
}


window.onLibsReady = function() {
  $(function() {
    drawOverviewDiagram();

    $("#chart_container").unbind().click(function() {
      $("#chart_container").hide();
      $('#chart_container_holder').hide();
    });
  });
};






