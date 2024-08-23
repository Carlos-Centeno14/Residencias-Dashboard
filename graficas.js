/*------>EFICIENCIA------
4.- MEN
5.- SEM
6.- ANU
*/
const getOptionChart4=() =>
    {
      return{
        title: {
          text: 'Stacked Area Chart'
        },
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
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
  
      };
  
  
    };
  const getOptionChart5=() =>
    {
      return{
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2021', '2022', '2023', '2023', '2024']
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
          data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
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
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95]
          }
        ]
      };
  
    };
  const getOptionChart6=() =>
    {
      return{
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Eficiencia',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 104.8, name: '2021' },
              { value: 73.5, name: '2022' },
              { value: 88, name: '2023' },
              { value: 94, name: '2024' },
              { value: 95, name: '2025' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
  
      };
  
    };
  
  /*------>PRODUCTO------
  7.- ANU
  8.- MEN
  9.- SEM
  */
  const getOptionChart7=() =>
    {
      return{
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Eficiencia',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 104.8, name: '2021' },
              { value: 73.5, name: '2022' },
              { value: 88, name: '2023' },
              { value: 94, name: '2024' },
              { value: 95, name: '2025' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
  
      };
  
    };
  const getOptionChart8=() =>
    {
      return{
        title: {
          text: 'Stacked Area Chart'
        },
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
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
  
      };
  
  
    };
    const getOptionChart9=() =>
    {
      return{
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
  
      };
  
    };
  //------>MINUTOS------
    const getOptionChart10=() =>
    {
      return{
        title: {
          text: 'World Population'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
  
      };
  
    };
  //------>MISCELANEOS------
    const getOptionChart11=() =>
    {
      return{
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
  
      };
  
    };
    const getOptionChart12=() =>
    {
      return{
        title: {
          text: 'Waterfall Chart',
          subtext: 'Living Expenses in Shenzhen'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
          },
          {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'inside'
            },
            data: [2900, 1200, 300, 200, 900, 300]
          }
        ]
  
      };
  
    };

    const initCharts =()=>
        {
    
                //Graficas de fases de areas {4-12}
                const chart4 = echarts.init(document.getElementById("Area-efi-m"),'infographic');
                const chart5 = echarts.init(document.getElementById("Area-efi-a"),'infographic');
                const chart6 = echarts.init(document.getElementById("Area-efi-sem"),'infographic');
                const chart7 = echarts.init(document.getElementById("Area-pd-anu"),'infographic');
                const chart8 = echarts.init(document.getElementById("Area-pd-men"),'infographic');
                const chart9 = echarts.init(document.getElementById("Area-pd-sem"),'infographic');
                const chart10 = echarts.init(document.getElementById("Area-min-pt"),'infographic');
                const chart11= echarts.init(document.getElementById("Area-op-prom"),'infographic');
                const chart12 = echarts.init(document.getElementById("Area-min-pz"),'infographic');

          chart4.setOption(getOptionChart4());
          chart5.setOption(getOptionChart5());
          chart6.setOption(getOptionChart6());
          chart7.setOption(getOptionChart7());
          chart8.setOption(getOptionChart8());
          chart9.setOption(getOptionChart9());
          chart10.setOption(getOptionChart10());
          chart11.setOption(getOptionChart11());
          chart12.setOption(getOptionChart12());
    
    
    
    
        };
    
    window.addEventListener("load", ()  => 
        {
            initCharts();
        }
    )