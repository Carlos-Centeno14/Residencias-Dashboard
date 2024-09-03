const getOptionChart17=() =>
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
              fontSize: 14},
              show: true,
              position: 'outside'
            }
          }
        ]
      };
    };
const getOptionChart18=() =>
    {
      return{
        title: {
          text: 'Producto Entregado',
          subtext: 'Grafica del producto anual del area'
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
        data: [150, 230, 224, 218, 135, 147, 260,80, 72, 101, 64,110],
        type: 'line',
        symbol: 'square',
        symbolSize: 14,
        lineStyle: {
          color: '#0098d9',
          width: 3,
          type: 'dashed'
        },
  
        showBackground: true,
        backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
        },
        label: {
        textStyle:{ fontWeight : 'bold',
        fontSize: 14},
        show: true,
        position: 'outside'
        }
      }
    ]
  };
};
const getOptionChart19=() =>//Min trabajados
    {
      return{
        title: {
          text: 'Minutos Trabajados',
          subtext: 'Grafica de los minutos trabajados por mes del area'
        },
        yAxis: {
          type: 'category',
                data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        xAxis: {
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
              textStyle:{ fontWeight : 'bold',
                fontSize: 14},
                show: true,
                position: 'outside'
            }
            
          }
        ]
      };
    };
const getOptionChart20=() =>//Min Producidos
    {
      return{
        title: {
            text: 'Minutos Producidos',
            subtext: 'Grafica de los minutos producidos por mes del area'
          },
          yAxis: {
            type: 'category',
                  data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
          },
          xAxis: {
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
                textStyle:{ fontWeight : 'bold',
                  fontSize: 16},
                  show: true,
                  position: 'outside'
              }
              
            }
          ]
  
      };
    };
const getOptionChart21=() =>//Prom operadores
    {
      return{
        title: {
          text: 'Operadores Promedio',
          subtext: 'Operadores promedio anual del area'
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
    type: 'line',
    symbol: 'circle',
    symbolSize: 12,
    lineStyle: {
      color: '#0098d9',
      width: 2,
      type: 'dashed'
    },
              label: {
              textStyle:{ fontWeight : 'bolder',
              fontSize: 14},
              show: true,
              position: 'outside'
            }
  }
]
      };
    };
const getOptionChart22=() =>//Min x pza
    {
      return{

      };
    };        

const initCharts =()=>
    {
      const chart17 = echarts.init(document.getElementById("EficienciaR"));
      const chart18 = echarts.init(document.getElementById("ProductoR"));
      const chart19 = echarts.init(document.getElementById("MTrabajadosR"));
      const chart20 = echarts.init(document.getElementById("MProducidosR"));
      const chart21 = echarts.init(document.getElementById("OperadoresR"));
      const chart22 = echarts.init(document.getElementById("MinpzaR"));

      chart17.setOption(getOptionChart17());
      chart18.setOption(getOptionChart18());
      chart19.setOption(getOptionChart19());
      chart20.setOption(getOptionChart20());
      chart21.setOption(getOptionChart21());
      chart22.setOption(getOptionChart22());
    };

    window.addEventListener("load", ()  => 
        {
            initCharts();
        }
    )

    //ACOMODAR EL TAMANO DE LAS GRAFICAS PARA TENER LOS 12 MESES DISPONIBLES