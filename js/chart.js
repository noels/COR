(function($) {

    var leaf = [{}];


    function _addMindmapNodes(chartNode, mindMapNode) {
        // if at a leaf then nothing to do
        if (!chartNode || chartNode.sheetName ) {
            return false;
        }

        var keys = Object.keys(chartNode);

        for (var keyIndex in keys) {
            var key = keys[keyIndex];

            var nodeIsLeaf = false;
            var _processFunction = function (nodeIsLeaf, key) {
                if (nodeIsLeaf) {
                    leaf = chartNode[key] || [{}];
                    drawChart(key);
                    $('#chart_container_holder').show();
                    $('#chart_container').show();
                } else {
                    $('#chart_container_holder').hide();
                    $('#chart_container').hide();
                }
            };
            var thisNode = $('body').addNode(mindMapNode, key, {
                href: '#',
                url: '#',
                onclick: function (node) {
                    $(node.obj.activeNode.content).each(function () {
                        this.hide();
                    });
                    $(node.content).each(function () {
                        this.show();
                    });

                    _processFunction(nodeIsLeaf, node.name);
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
            href: '#',
            url: '#',
            onclick: function (node) {
                $(node.obj.activeNode.content).each(function () {
                    this.hide();
                });
            }
        });

        _addMindmapNodes(charts, root);
    }


    window.onLibsReady = function () {
        $(function () {
            drawOverviewDiagram();
            $("#chart_container").unbind().click(function () {
                $("#chart_container").hide();
                $('#chart_container_holder').hide();
            });
        });
    };


})(jQuery);

