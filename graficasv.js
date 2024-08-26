const getOptionChart13=() =>//Producto Vendido Mensual
{
  return{
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['2021', '2022', '2023', '2024', '2025']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '2021',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '2022',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '2023',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410,820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: '2024',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320,150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '2025',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320,320, 332, 301, 334, 390, 330, 320]
      }
    ]
  };
};

const getOptionChart14=() => //Producto Vendido Anual
{
    return{
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2021', '2022', '2023', '2023', '2024', '2025']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '2021',
            type: 'line',
            stack: 'Total',
            data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95]
          },
          {
            name: '2022',
            type: 'line',
            stack: 'Total',
            data: [88, 92, 97, 74, 80, 95, 110,80,95,80,82,105]
          },
          {
            name: '2023',
            type: 'line',
            stack: 'Total',
            data: [68, 72, 87, 84, 90, 65, 100,90,85,80,82,70]
          },
          {
            name: '2024',
            type: 'line',
            stack: 'Total',
            data: [88, 92, 97, 74, 80, 95, 110,80,95,80,82,105]
          },
          {
            name: '2025',
            type: 'line',
            stack: 'Total',
            data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95]
          }
        ]
      };

}


const getOptionChart15=() => //Ganancias Mensual
{
  return{
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      //Sacarlos desde la bd, seria el anio del area        
      data: ['2021', '2022', '2023', '2024', '2025']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        //la data se queda estatica para las 52 semanas
        data:  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
//            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    //Las series se van a generar si es posible con un FOR para los anios desde la bd
    series: [
      {
        name: '2021',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        //Traer este arreglo desde la bd
        data: [1209, 1273, 1156, 1002, 1412, 1278, 1305, 1336, 1429, 1350, 837, 1325, 874, 1049, 1448, 1372, 940, 1264, 1088, 1467, 1114, 1489, 1386, 1004, 1051, 1318, 1043, 1128, 1270, 1139, 1360, 1346, 1132, 1419, 836, 864, 1456, 935, 1310, 1236, 1188, 1404, 1246, 1085, 1319, 1195, 1333, 1268, 1144, 916, 1427]
      },
      {
        name: '2022',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1226, 1067, 1053, 1313, 1438, 1460, 1241, 1306, 1493, 1280, 945, 1205, 1269, 1392, 1127, 1090, 1167, 1178, 842, 1357, 1180, 927, 1321, 1217, 1423, 1276, 1234, 1265, 1212, 1252, 1169, 1007, 1470, 1403, 1498, 1328, 1187, 1400, 935, 848, 949, 1279, 1275, 1415, 1093, 1347, 1292, 1076, 1362, 1059, 1295]
      },
      {
        name: '2023',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1104, 848, 1430, 1330, 1449, 1293, 1219, 1473, 1397, 837, 1326, 1262, 1029, 836, 1329, 1287, 1184, 1428, 1320, 1301, 1457, 1374, 1425, 1056, 1222, 1133, 1274, 1426, 1297, 1342, 1120, 1395, 1368, 1126, 1341, 1118, 929, 1039, 1367, 1406, 1162, 1238, 1393, 1221, 1150, 1439, 1298, 1453, 1186, 1005, 1134]
      },
      {
        name: '2024',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1266, 1028, 1327, 1422, 1480, 1323, 1322, 1240, 1046, 849, 1170, 1443, 1316, 1451, 1253, 1343, 1483, 1468, 1398, 1440, 1261, 1324, 1101, 1032, 1351, 1464, 1353, 1315, 1391, 1081, 1024, 1174, 940, 1200, 1204, 1478, 1446, 1459, 1263, 1105, 1036, 1054, 1349, 1475, 1095, 1201, 1019, 1192, 1496, 1047, 1444]
      },
      {
        name: '2025',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1317, 1407, 1378, 1259, 1244, 1304, 1487, 1129, 1402, 1461, 847, 1171, 1447, 1413, 1021, 1258, 1272, 1185, 848, 1135, 1363, 1497, 1411, 1094, 1290, 1077, 1228, 1092, 1267, 1145, 1099, 1335, 1141, 1409, 1394, 1091, 1163, 1309, 1109, 1373, 1299, 1015, 1420, 1437, 1130, 1308, 1030, 1385, 1465, 1289, 1469]
      }
    ]
  };

};
const getOptionChart16=() => //Ganancias Anual
{
  return{
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '2021' },
          { value: 1735, name: '2022' },
          { value: 1288, name: '2023' },
          { value: 1194, name: '2024' },
          { value: 1595, name: '2025' }
        ]
      }
    ]
  };

};


const initCharts =()=>
    {
            
    const chart13 = echarts.init(document.getElementById("pt-men"),'infographic');
    const chart14 = echarts.init(document.getElementById("pt-anu"),'infographic');
    const chart15 = echarts.init(document.getElementById("gn-men"),'infographic');
    const chart16 = echarts.init(document.getElementById("gn-anu"),'infographic');

    chart13.setOption(getOptionChart13());
    chart14.setOption(getOptionChart14());
    chart15.setOption(getOptionChart15());
    chart16.setOption(getOptionChart16());

    };

window.addEventListener("load", ()  => 
    {
        initCharts();
    }
)