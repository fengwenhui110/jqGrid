var grid; + function() {
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
            nodeType: '101',
            CustomerID: '1',
            tt: '是的发送到发送到发送到撒的发生的'
        }];
        var options = {
            id: '#jqGrid',
            cellsubmit: 'clientArray',
            datatype: 'local',
            data: mydata,
            height: 300,
            pager: '#jqGridPager',
            viewrecords: true,
            multiselect: true,
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
            }, {
                label: 'Customer ID',
                name: 'CustomerID',
                width: 150,
                editable: true,
                edittype: 'select',
                formatter: 'select',
                editoptions: {
                    value: 'ALFKI:ALFKI;1:ANATR;ANTON:ANTON;AROUT:AROUT;BERGS:BERGS;BLAUS:BLAUS;BLONP:BLONP;BOLID:BOLID;BONAP:BONAP;BOTTM:BOTTM;BSBEV:BSBEV;CACTU:CACTU;CENTC:CENTC;CHOPS:CHOPS;COMMI:COMMI;CONSH:CONSH;DRACD:DRACD;DUMON:DUMON;EASTC:EASTC;ERNSH:ERNSH;FAMIA:FAMIA;FISSA:FISSA;FOLIG:FOLIG;FOLKO:FOLKO;FRANK:FRANK;FRANR:FRANR;FRANS:FRANS;FURIB:FURIB;GALED:GALED;GODOS:GODOS;GOURL:GOURL;GREAL:GREAL;GROSR:GROSR;HANAR:HANAR;HILAA:HILAA;HUNGC:HUNGC;HUNGO:HUNGO;ISLAT:ISLAT;KOENE:KOENE;LACOR:LACOR;LAMAI:LAMAI;LAUGB:LAUGB;LAZYK:LAZYK;LEHMS:LEHMS;LETSS:LETSS;LILAS:LILAS;LINOD:LINOD;LONEP:LONEP;MAGAA:MAGAA;MAISD:MAISD;MEREP:MEREP;MORGK:MORGK;NORTS:NORTS;OCEAN:OCEAN;OLDWO:OLDWO;OTTIK:OTTIK;PARIS:PARIS;PERIC:PERIC;PICCO:PICCO;PRINI:PRINI;QUEDE:QUEDE;QUEEN:QUEEN;QUICK:QUICK;RANCH:RANCH;RATTC:RATTC;REGGC:REGGC;RICAR:RICAR;RICSU:RICSU;ROMEY:ROMEY;SANTG:SANTG;SAVEA:SAVEA;SEVES:SEVES;SIMOB:SIMOB;SPECD:SPECD;SPLIR:SPLIR;SUPRD:SUPRD;THEBI:THEBI;THECR:THECR;TOMSP:TOMSP;TORTU:TORTU;TRADH:TRADH;TRAIH:TRAIH;VAFFE:VAFFE;VICTE:VICTE;VINET:VINET;WANDK:WANDK;WARTH:WARTH;WELLI:WELLI;WHITC:WHITC;WILMK:WILMK;WOLZA:WOLZA'
                }
            },
            {
                label: 'textarea测试',
                name: 'tt',
                edittype: 'textarea',
                editable: true,
                editoptions: {rows: '5', cols: '48'},
                hidedlg: true
            }]
        };
        grid = $('#jqGrid').jqGrid(options);
        $('#jqGrid').jqGrid('navGrid', '#jqGridPager', {
            edit: true,
            add: true,
            del: true,
            search: false,
            refresh: true,
            view: false,
            position: 'left',
            cloneToTop: false
        });
    });
}();
