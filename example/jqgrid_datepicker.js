var grid;
+ function() {
    'use strict';
    $(function() {
        var mydata = [{
            nodeId: '1',
            nodeNm: '学习',
            orderDate: '1996-07-11'
        }];
        var options = {
            id: '#jqGrid',
            datatype: 'local',
            data: mydata,
            pager: '#jqGridPager',
            cellEdit: true,
            cellsubmit: 'clientArray',
            width: 760,
            colModel: [{
                name: 'nodeId',
                key: true,
                hidden: true
            }, {
                label: '名称',
                name: 'nodeNm',
                width: 150,
                editable: true,
                edittype: 'text'
            }, {
                label: '时间',
                name: 'orderDate',
                edittype: 'text',
                editable: true,
                width: 150,
                editoptions: {
                    dataInit: function(element) {
                      $(element).datepicker({
                        autoclose: true,
                        format: 'yyyy-mm-dd',
                        orientation: 'auto bottom'
                      });
                    }
                }
              }
            ]
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
