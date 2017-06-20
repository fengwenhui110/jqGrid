var grid;
+ function() {
    'use strict';
    $(function() {
        var zNodesClassical = [{
            id: 1,
            pId: 0,
            name: '通知类别',
            open: true
        }, {
            id: 101,
            pId: 1,
            name: '1'
        }, {
            id: 102,
            pId: 1,
            name: '2'
        }, {
            id: 103,
            pId: 1,
            name: '3'
        }, {
            id: 104,
            pId: 1,
            name: '4'
        }, {
            id: 105,
            pId: 1,
            name: '5'
        }];
        var mydata = [{
            nodeId: '1',
            nodeNm: 'xxxxx',
            nodeType: '101'
        }];
        var options = {
            id: '#jqGrid',
            cellsubmit: 'clientArray',
            datatype: 'local',
            data: mydata,
            width: 760,
            colModel: [{
                name: 'nodeId',
                key: true,
                hidden: true
            }, {
                label: '节点名称',
                name: 'nodeNm',
                editable: true,
                edittype: 'text',
                align: 'center'
            }, {
                label: '节点类型',
                name: 'nodeType',
                edittype: 'pickerTree',
                editable: true,
                align: 'center',
                editoptions: {
                    id: 'nodeType',
                    nodes: zNodesClassical,
                    check: {
                        enable: false
                    },
                    view: {
                        dblClickExpand: false,
                        showLine: true,
                        selectedMulti: false
                    },
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: 'id',
                            pIdKey: 'pId',
                            rootPId: ''
                        }
                    }
                }
            }
            ],
            height: 300,
            cellEdit: true
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
