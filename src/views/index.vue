<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">燃气轮机联合循环系统性能变化评估平台</span>
              <dv-decoration-6
                  class="title-bototm"
                  :reverse="true"
                  :color="['#50e3c2', '#67a1e5']"
                  style="width:3.125rem;height:.1rem;"
              />
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

        <div class="body-box">
          <!-- 第二行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-11 title="压气机性能">
                <centerLeft1 />
              </dv-border-box-11>
            </div>
            <!-- 中间 -->
            <div>
              <center />
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <bottomRight />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index.js'
import centerLeft1 from "./centerLeft1";
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
