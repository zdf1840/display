<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <el-row style="margin-bottom: 10px">
          <div class="d-flex jc-center">
            <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
            <div class="d-flex jc-center">
              <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
              <div class="title">
                <h1 style="margin: 5px">燃气轮机联合循环系统性能变化评估平台</h1>
                <div style="transform: translateY(0.6rem)">
                  <span class="title-text2">当前时间：{{dateYear}} {{dateWeek}} {{dateDay}}</span>
                </div>
              </div>
              <dv-decoration-8
                      :reverse="true"
                      :color="['#568aea', '#000000']"
                      style="width:2.5rem;height:.625rem;"
              />
            </div>
            <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
            <!--          <span class="title-text2">{{dateYear}} {{dateWeek}} {{dateDay}}</span>-->
          </div>
        </el-row>
        <el-row>
            <!-- 第二行数据 -->
            <!-- 左 -->
            <el-row class="content-box">
              <el-col :span="6">
                <el-row type="flex">
                  <dv-border-box-10>
                    <div class="d-flex jc-center" style="transform: translateY(20px)">
                      <h2>压气机性能</h2>
                    </div>
                    <centerLeft1 />
                  </dv-border-box-10>
                </el-row>
                <el-row type="flex">
                  <dv-border-box-10>
                    <div class="d-flex jc-center" style="transform: translateY(21px)">
                      <h2>压气机出口温度传感器 G1 G2</h2>
                    </div>
                    <centerLeft2 />
                  </dv-border-box-10>
                </el-row>
                <el-row type="flex">
                  <dv-border-box-10>
                    <span class="d-flex jc-center" style="transform: translateY(21px)">
                      <h2>压气机出口压力传感器 G1 G2</h2>
                    </span>
                    <centerLeft1 />
                  </dv-border-box-10>
                </el-row>
              </el-col>
              <!-- 中间 -->
              <el-col :span="12">
                <dv-border-box-10>
                  <span class="d-flex jc-center" style="transform: translateY(21px)">
                      <h1>燃机效率</h1>
                  </span>
                  <centerTop />
                </dv-border-box-10>
              </el-col>
              <!-- 右 -->
              <el-col :span="6">
                <el-row type="flex">
                  <dv-border-box-10>
                    <span class="d-flex jc-center" style="transform: translateY(21px)">
                      <h2>透平性能</h2>
                    </span>
                    <centerLeft1 />
                  </dv-border-box-10>
                </el-row>
                <el-row type="flex">
                  <dv-border-box-10>
                    <span class="d-flex jc-center" style="transform: translateY(21px)">
                      <h2>透平出口温度传感器</h2>
                    </span>
                    <centerLeft1 />
                  </dv-border-box-10>
                </el-row>
                <el-row type="flex">
                  <dv-border-box-10>
                    <span class="d-flex jc-center" style="transform: translateY(21px)">
                      <h2>透平出口压力传感器</h2>
                    </span>
                    <centerLeft1 />
                  </dv-border-box-10>
                </el-row>
              </el-col>
            </el-row>
        </el-row>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index.js'
import centerLeft1 from "./centerLeft1";
import centerLeft2 from "./centerLeft2";
import centerTop from "./centerTop";
export default {
  name: "index",
  data () {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerTop,
  },
  mounted () {
     this.timeFn();
    this.cancelLoading();
  },
  methods: {
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";
</style>
