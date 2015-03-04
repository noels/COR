
function _alertError(msg) {
    var div = $('<div class="error">' + msg + '</div>');
    $('#messages').append(div);
    setTimeout(function () {
        div.fadeOut(500);
    }, 2000);
};




function getChart(chartNode, chartName) {
    var keys = Object.keys(chartNode);
    var chart = null;
    for (var keyIndex in keys) {
        //if it has a sheetName it's a terminal node
        if (chartNode[keys[keyIndex]].hasOwnProperty('sheetName')){
            if (chartName == keys[keyIndex]){
                return chartNode[keys[keyIndex]];
            }
        } else {  //otherwise recurse
            chart = getChart(chartNode[keys[keyIndex]], chartName);
            if (chart){
                return chart;
            }
        }
    }
    return chart;
}



function queryChart(sheetName, range, cb) {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/19nKuPp1xQVWclduV1Jmfh1M67CgvloQh_PFpDMPs3Hk/edit?usp=sharing&range=' + range + '&sheet=' + sheetName);

    query.send(function (response) {
        if (response.isError()) {
            _alertError('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        console.log(response.getDataTable());

        cb(response);
    });
}



function drawChart(chartName) {
    var range = 'A1:B100';

    $("#loading").show();
    $("#chart").hide();

    var chart = getChart(charts, chartName) || {};
    var sheetName = chart.sheetName;

    if (chart.dataRange) {
        range = chart.dataRange;
    }

    queryChart(sheetName, range, function(response) {
        handleQueryResponse(chartName, chart, response);
    });

    range = 'H1:H1';

    queryChart(sheetName, range, function(response) {
        var data = response.getDataTable();
        $('#chart_description').html('<div id="chart_description_inner">'+data.getValue(0, 0)+'</div>');
    });
}

function handleQueryResponse(chartName, chart, response) {
    if (!$('#loading').is(':visible')) {
        return;
    }

    var data = response.getDataTable();
    var formatter = new google.visualization.DateFormat({formatType: 'short'});
    formatter.format(data, 0);

    var chartOptions = chart.chartOptions || {};

    switch (chartOptions.chartType) {
        case 'pie':
            chart = new google.visualization.PieChart(document.getElementById('chart'));
            break;
        case 'bar':
            chart = new google.visualization.ColumnChart(document.getElementById('chart'));
            break;
        default:
            chart = new google.visualization.LineChart(document.getElementById('chart'));
    }

    var options = {
        title: chartName,
        chartArea: {
            width: '60%',
            height: '80%'
        },
        height: $('#chart').height() * 0.8,
        width: $('#chart').width() * 0.9
    };

    if (chartOptions.vAxis) {
        options["vAxis"] = chartOptions.vAxis;
    }

    google.visualization.events.addListener(chart, 'ready', function () {
        $('#loading').hide();
        $("#chart").show();
    });
    chart.draw(data, options);
}
