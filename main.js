
//Graficas de fases de produccion 1 y 2
const getOptionChart1=() =>
    {
        return {
            title: {
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Eficiencia Promedio',
                  type: 'pie',
                  radius: '50%',
                  data: [
                    { value: 98, name: 'Fase 1' },
                    { value: 85, name: 'Fase 2' }
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
const getOptionChart2=() =>
    {
      return{
        title: {
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
          data: ['Operadores']
        },
        series: [
          {
            name: 'Fase 2',
            type: 'bar',
            data: [30]
          },
          {
            name: 'Fase 1',
            type: 'bar',
            data: [21]
          }
        ]

      };


    };
const getOptionChart3=() =>
    {


      return{

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['Fase 1', 'Fase 2']
        },
        xAxis: [
          {
            type: 'category',
            data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Min prod',
            min: 0,
            max: 1000,
            interval: 50,
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: 'Fase 1',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
      60, 52, 200, 334, 390, 330, 220,60, 52, 200,110,200
            ]
          },
          {
            name: 'Fase 2',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              42, 65, 99, 100, 128, 150, 175, 189, 70, 48, 56.0, 92
            ]
          }
        ]

    };
  };
//Graficas de fases de produccion 1 y 2 fin

const initCharts =()=>
    {
      const chart1 = echarts.init(document.getElementById("Efi-fase"),'walden');
      const chart2 = echarts.init(document.getElementById("Opm-fase"),'walden');
      const chart3 = echarts.init(document.getElementById("Pep-fase"),'walden');

      chart1.setOption(getOptionChart1());
      chart2.setOption(getOptionChart2());
      chart3.setOption(getOptionChart3());
    };

window.addEventListener("load", ()  => 
    {
        initCharts();
    }
)
