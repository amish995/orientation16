/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['135px', '18px', '630px', '563px', 'auto', 'auto'],
                            fill: ["rgba(237,237,237,1.00)"],
                            stroke: [0,"rgb(192, 192, 192)","none"]
                        },
                        {
                            id: 'Ellipse2Copy',
                            type: 'ellipse',
                            rect: ['223px', '73px', '453px', '453px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(111,111,111,1.00)"],
                            stroke: [0,"rgb(192, 192, 192)","none"]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['223px', '-464px', '453', '453', 'auto', 'auto'],
                            transform: [[],[],[],['1.05','1.05']],
                            c: [
                            {
                                id: 'Ellipse2',
                                type: 'ellipse',
                                rect: ['0px', '0px', '453px', '453px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(217,217,217,1.00)"],
                                stroke: [0,"rgb(192, 192, 192)","none"],
                                boxShadow: ["", 12, 11, 26, 1, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['167px', 'auto', '124px', '124px', 'auto', '162px'],
                                transform: [[],['360'],[],['1.01','1.01']],
                                c: [
                                {
                                    id: 'Ellipse',
                                    type: 'ellipse',
                                    rect: ['41px', 'auto', '41px', '41px', 'auto', '42px'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(130,130,130,0.70)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'EllipseCopy',
                                    type: 'ellipse',
                                    rect: ['0px', 'auto', '110px', '110px', 'auto', '0px'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(192,192,192,0.00)"],
                                    stroke: [7,"rgba(130,130,130,0.70)","solid"]
                                },
                                {
                                    id: 'Group2',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    c: [
                                    {
                                        id: 'RectangleCopy3',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'RectangleCopy2',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                },
                                {
                                    id: 'Group2Copy2',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    transform: [[],['60']],
                                    c: [
                                    {
                                        id: 'RectangleCopy7',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'RectangleCopy6',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                },
                                {
                                    id: 'Group2Copy3',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    transform: [[],['120']],
                                    c: [
                                    {
                                        id: 'RectangleCopy9',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'RectangleCopy8',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(130,130,130,0.70)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                }]
                            },
                            {
                                id: 'GroupCopy',
                                type: 'group',
                                rect: ['165px', 'auto', '124px', '124px', 'auto', '164px'],
                                transform: [[],['360']],
                                c: [
                                {
                                    id: 'EllipseCopy3',
                                    type: 'ellipse',
                                    rect: ['41px', 'auto', '41px', '41px', 'auto', '42px'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(192,192,192,1)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'EllipseCopy2',
                                    type: 'ellipse',
                                    rect: ['0px', 'auto', '110px', '110px', 'auto', '0px'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(192,192,192,0.00)"],
                                    stroke: [7,"rgba(192,192,192,1.00)","solid"]
                                },
                                {
                                    id: 'Group2Copy5',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    c: [
                                    {
                                        id: 'RectangleCopy11',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'RectangleCopy10',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                },
                                {
                                    id: 'Group2Copy4',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    transform: [[],['60']],
                                    c: [
                                    {
                                        id: 'RectangleCopy5',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'RectangleCopy4',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                },
                                {
                                    id: 'Group2Copy',
                                    type: 'group',
                                    rect: ['59', 'auto', '5', '216', 'auto', '-46px'],
                                    transform: [[],['120']],
                                    c: [
                                    {
                                        id: 'RectangleCopy',
                                        type: 'rect',
                                        rect: ['0px', '108px', '5px', '105px', 'auto', 'auto'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    },
                                    {
                                        id: 'Rectangle',
                                        type: 'rect',
                                        rect: ['0px', 'auto', '5px', '105px', 'auto', '108px'],
                                        fill: ["rgba(192,192,192,1.00)"],
                                        stroke: [0,"rgb(192, 192, 192)","none"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['428', '73', '41', '453', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            },
                            {
                                id: 'Rectangle3Copy2',
                                type: 'rect',
                                rect: ['0px', 'auto', '41px', '41px', 'auto', '0px'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            }]
                        },
                        {
                            id: 'Group3Copy',
                            type: 'group',
                            rect: ['428', '73', '41', '453', 'auto', 'auto'],
                            transform: [[],['60']],
                            c: [
                            {
                                id: 'Rectangle3Copy4',
                                type: 'rect',
                                rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            },
                            {
                                id: 'Rectangle3Copy3',
                                type: 'rect',
                                rect: ['0px', 'auto', '41px', '41px', 'auto', '0px'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            }]
                        },
                        {
                            id: 'Group3Copy2',
                            type: 'group',
                            rect: ['428', '73', '41', '453', 'auto', 'auto'],
                            transform: [[],['120']],
                            c: [
                            {
                                id: 'Rectangle3Copy6',
                                type: 'rect',
                                rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            },
                            {
                                id: 'Rectangle3Copy5',
                                type: 'rect',
                                rect: ['0px', 'auto', '41px', '41px', 'auto', '0px'],
                                fill: ["rgba(237,237,237,1)"],
                                stroke: [0,"rgb(192, 192, 192)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 16808,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "height",
                            7500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3Copy3}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid56",
                            "height",
                            7500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3Copy4}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid95",
                            "boxShadow.blur",
                            11750,
                            2058,
                            "linear",
                            "${Ellipse2}",
                            '3px',
                            '26px'
                        ],
                        [
                            "eid77",
                            "top",
                            14308,
                            2500,
                            "easeInQuad",
                            "${Group4}",
                            '73px',
                            '-464px'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            11750,
                            2058,
                            "easeInCirc",
                            "${Group4}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '1.01',
                            '1.01'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            0,
                            4000,
                            "easeInOutElastic",
                            "${GroupCopy}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid98",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid102",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy11}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid128",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '162px',
                            '162px'
                        ],
                        [
                            "eid100",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy5}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '1.01',
                            '1.01'
                        ],
                        [
                            "eid52",
                            "height",
                            6500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3Copy2}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid97",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${Rectangle}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid22",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy9}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid45",
                            "height",
                            6500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy8}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid7",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy3}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid18",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy7}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid99",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy4}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid108",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy9}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid107",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid17",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy6}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid106",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy8}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid58",
                            "height",
                            8500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3Copy6}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "height",
                            8500,
                            2626,
                            "easeInOutExpo",
                            "${Rectangle3Copy5}",
                            '41px',
                            '0px'
                        ],
                        [
                            "eid101",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy10}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            0,
                            4000,
                            "easeInOutElastic",
                            "${Group}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid94",
                            "boxShadow.spread",
                            11750,
                            2058,
                            "linear",
                            "${Ellipse2}",
                            '-15px',
                            '1px'
                        ],
                        [
                            "eid62",
                            "scaleY",
                            11750,
                            2058,
                            "easeInCirc",
                            "${Group4}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid92",
                            "boxShadow.offsetH",
                            11750,
                            2058,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '12px'
                        ],
                        [
                            "eid105",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy7}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid6",
                            "height",
                            4000,
                            2000,
                            "easeInBack",
                            "${RectangleCopy2}",
                            '105px',
                            '57px'
                        ],
                        [
                            "eid103",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid104",
                            "background-color",
                            6625,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'rgba(130,130,130,0.70)',
                            'rgba(130,130,130,0.70)'
                        ],
                        [
                            "eid93",
                            "boxShadow.offsetV",
                            11750,
                            2058,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '11px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("vault_edgeActions.js");
})("EDGE-298541995");
