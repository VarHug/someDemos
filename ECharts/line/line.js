let myChart = echarts.init(document.getElementById('line'))

// 图表配置
let opt = {
  // 标题
  title: {
    text: '折线图示例',
    left: '200'
  },
  // 工具箱
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true
      }
    }
  },
  // 图例
  legend: {
    data: ["产量"]
  },
  // x轴
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  // y轴
  yAxis: {},
  // 数据
  series: [{
    name: "产量",
    type: "line",
    data: [7, 30, 50, 11, 40, 80],
    markPoint: {
      data: [
        {
          name: "最大值",
          type: "max"
        },
        {
          name: "最小值",
          type: "min"
        }
      ]
    },
    markLine: {
      data: [
        {
          name: "平均线",
          type: "average"
        }
      ]
    },
    markArea: {
      data: [
        [
          {
            name: "平均值到最大值",
            type: "average",
          },
          {
            type: "max"
          }
        ],
        [
          {
            name: "所有数据范围区间",
            type: "min"
          },
          {
            type: "max"
          }
        ]
      ]
    }
  }]
}

myChart.setOption(opt)
