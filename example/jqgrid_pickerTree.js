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
            name: '合同类'
        }, {
            id: 102,
            pId: 1,
            name: '调度类'
        }, {
            id: 103,
            pId: 1,
            name: '统计类'
        }, {
            id: 104,
            pId: 1,
            name: '消息类'
        }, {
            id: 105,
            pId: 1,
            name: '其他类'
        }];
        var mydata = [{
            nodeId: '1',
            nodeNm: '配套产品准备',
            nodeType: '101'
        }];
        var options = {
            id: '#jqGrid',
            cellsubmit: 'clientArray',
            datatype: 'local',
            data: mydata,
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
            sortorder: 'desc', // 排序顺序，升序或者降序（asc or desc）
            cellEdit: true // 设置是否允许行内编辑
        };
        $.extend(true, $.jgrid.defaults, {
            _delrowid: [], // 保存删除行id
            addParams: {
                serial: 0,
                rowID: 'new_row'
            },
            responsive: true,
            styleUI: 'Bootstrap',
            class: 'table-striped'
        });
        grid = $('#jqGrid').jqGrid(options);
    });
}();
