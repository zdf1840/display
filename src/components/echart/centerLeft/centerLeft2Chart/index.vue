<template>
    <div class="com-chart" ref="L1"></div>
</template>

<script>
export default {
  data () {
    return {
        // 实时数据数组
        G1data: [],
        G2data: [],
        now: new Date(1997, 9, 3),
        oneDay: 24 * 3600 * 1000,
        initOption: {},
        G1Values: Math.random() * 1000,
        G2Values: Math.random() * 1000,
        timerId: null, // 定时器的标识
    }
  },
  components: {
  },
  mounted () {
      this.initData()
      this.startInterval()
  },
  methods: {
      // 初始化echartInstance对象
      initData() {
          this.chartInstance = this.$echarts.init(this.$refs.L1)
          for (let i = 0; i < 5; i++) {
              this.G1data.push(this.updateChart1());
              this.G2data.push(this.updateChart2());
          }
          // 对图表初始化配置的控制
          this.initOption = {
              legend: {
                  bottom: 0,
                  top: 20,
                  data: ['G1', 'G2'],
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      animation: false
                  }
              },
              xAxis: {
                  type: 'time',
                  boundaryGap: false,
                  splitLine: {
                      show: false
                  }
              },
              yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%'],
                  showSymbol: true,
                  hoverAnimation: false,
                  splitLine: {
                      show: false
                  }
              },
              series: [
                  {
                      name: 'G1',
                      type: 'line',
                      data: this.G1data,
                      smooth: true,
                      itemStyle : {
                          normal: {
                              lineStyle: {color: '#5ad5e0'},
                          }
                      }
                  },
                  {
                      name: 'G2',
                      type: 'line',
                      data: this.G2data,
                      smooth: true,
                      itemStyle : {
                          normal: {
                              lineStyle: {color: '#d95959'},
                          }
                      }
                  },
              ]
          };
          this.chartInstance.setOption(this.initOption)
      },
      // 更新G1实时数据
      updateChart1: function() {
          this.now = new Date(+this.now + this.oneDay);
          this.G1Values = this.G1Values + Math.random() * 21 - 10;
          return {
              name: this.now.toString(),
              value: [
                  [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                  Math.random(),
              ]
          };
      },
      // 更新G2实时数据
      updateChart2: function() {
          this.G2Values = this.G2Values + Math.random() * 21 - 10;
          return {
              name: this.now.toString(),
              value: [
                  [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                  Math.random()
              ]
          };
      },
      startInterval () {
          this.timerId = setInterval(() => {
              this.G1data.shift();
              this.G1data.push(this.updateChart1());
              this.G2data.shift();
              this.G2data.push(this.updateChart1());
              this.chartInstance.setOption({
                  series: [
                    {
                      data: this.G1data
                    },
                    {
                      data: this.G2data
                    },
                  ]
              });
          }, 1000)
      },
      // 获取当前时间
      getTime : function() {
          const ts = arguments[0] || 0;
          let t, h, i, s;
          t = ts ? new Date(ts * 1000) : new Date();
          h = t.getHours();
          i = t.getMinutes();
          s = t.getSeconds();
          // 定义时间格式
          return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
      },
  }
}
</script>

<style lang="scss" scoped>
.com-chart {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
