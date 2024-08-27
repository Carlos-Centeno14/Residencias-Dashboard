const getOptionChart1=() =>
    {
      return{
        title: {
            text: 'Eficiencia',
            subtext: 'Grafica de la eficiencia anual del area'
          },
          xAxis: {
            type: 'category',
                  data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 25},
                show: true,
                position: 'top'
              }
              
            }
          ]
      };
    };
const getOptionChart2=() =>
    {
      return{
        title: {
            text: 'Producto Entregado',
            subtext: 'Grafica del producto anual del area'
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
              data: [800, 720, 1011, 640, 900, 650, 1000,700,850,905,924,955],
              type: 'line',
              areaStyle: {},
                    backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 16},
                show: true,
                position: 'INSIDE'
              }
            }
          ]
      };
    };
const getOptionChart3=() =>//Min trabajados
    {
      return{
        title: {
            text: 'Minutos Trabajados',
            subtext: 'Grafica de los minutos trabajados por mes del area'
          },
          xAxis: {
            type: 'category',
                  data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 25},
                show: true,
                position: 'top'
              }
              
            }
          ]
      };
    };
const getOptionChart4=() =>//Min Producidos
    {
      return{
        title: {
            text: 'Minutos Producidos',
            subtext: 'Grafica de los minutos producidos por mes del area'
          },
          xAxis: {
            type: 'category',
                  data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 25},
                show: true,
                position: 'top'
              }
              
            }
          ]
      };
    };
const getOptionChart5=() =>//Prom operadores
    {
      return{
        title: {
            text: 'Operadores Promedio',
            subtext: 'Operadores promedio anual del area'
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
              data: [800, 720, 1011, 640, 900, 650, 1000,700,850,905,924,955],
              type: 'line',
              areaStyle: {},
                    backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 16},
                show: true,
                position: 'top'
              }
            }
          ]
      };
    };
const getOptionChart6=() =>//Min x pza
    {
      return{
        title: {
            text: 'Minutos por pieza promedio',
            subtext: 'Grafica de los minutos por pieza producida por mes del area'
          },
          xAxis: {
            type: 'category',
                  data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [80, 72, 101, 64, 90, 65, 100,70,85,90,92,95],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },      
              label: {
                textStyle:{ fontWeight : 'bolder',
                fontSize: 25},
                show: true,
                position: 'top'
              }
              
            }
          ]
      };
    };        

const initCharts =()=>
    {
      const chart1 = echarts.init(document.getElementById("Eficiencia"),'walden');
      const chart2 = echarts.init(document.getElementById("Producto"),'walden');
      const chart3 = echarts.init(document.getElementById("MTrabajados"),'walden');
      const chart4 = echarts.init(document.getElementById("MProducidos"),'walden');
      const chart5 = echarts.init(document.getElementById("Operadores"),'walden');
      const chart6 = echarts.init(document.getElementById("Minpza"),'walden');


      chart1.setOption(getOptionChart1());
      chart2.setOption(getOptionChart2());
      chart3.setOption(getOptionChart3());
      chart4.setOption(getOptionChart4());
      chart5.setOption(getOptionChart5());
      chart6.setOption(getOptionChart6());
    };

window.addEventListener("load", ()  => 
    {
        initCharts();
    }
)
