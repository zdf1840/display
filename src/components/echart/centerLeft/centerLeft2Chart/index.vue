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
        G1Values: [],
        G2Values: [],
        date: [],
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
          // for (let i = 0; i < 5; i++) {
          //     this.G1data.push(this.updateChart1());
          //     this.G2data.push(this.updateChart2());
          // }
          // 对图表初始化配置的控制
          this.initOption = {
              color:['#d95959','#8cd5c2'],
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
                  type: 'category',
                  boundaryGap: false,
                  data: this.date,	// 绑定实时数据数组
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
                      data: this.G1Values, // 绑定实时数据数组
                      smooth: true,
                  },
                  {
                      name: 'G2',
                      type: 'line',
                      data: this.G2Values, // 绑定实时数据数组
                      smooth: true,
                  },
              ]
          };
          this.chartInstance.setOption(this.initOption)
      },
      startInterval () {
          this.timerId = setInterval(() => {
              const v = Math.random()
              if (this.G1Values.length === 10) {
                  this.G1Values.shift()
                  this.G1Values.push(v.toFixed(2))
                  this.G2Values.shift()
                  this.G2Values.push(Math.round(v).toFixed(2))
                  this.date.shift()
              } else {
                  this.G1Values.push(v.toFixed(2))
                  this.G2Values.push(Math.round(v).toFixed(2))
              }
              this.date.push(this.getTime(Math.round(new Date().getTime() / 1000)));
              // 重新将数组赋值给echarts选项
              this.initOption.xAxis.data = this.date
              this.initOption.series[0].data = this.G1Values
              this.initOption.series[1].data = this.G2Values
              this.chartInstance.setOption(this.initOption)
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
