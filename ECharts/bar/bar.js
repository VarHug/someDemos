let myChart = echarts.init(document.getElementById('bar'))

// 图表配置
let opt = {
  // 标题
  title: {
    text: '柱状图示例'
  },
  // 工具箱
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true
      },
      dataView: {
        show: true
      },
      restore: {
        show: true
      },
      dataZoom: {
        show: true
      },
      magicType: {
        type: ['line', 'bar']
      }
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  // 图例
  legend: {
    data: ["销量"]
  },
  // x轴
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  // y轴
  yAxis: {},
  // 数据
  series: [{
    name: "销量",
    type: "bar",
    data: [5, 20, 36, 10, 10, 20]
  }]
}

myChart.setOption(opt)
