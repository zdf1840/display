<template>
  <div id="centerLeft1">
    <div class="d-flex">
      <form  style="transform: translateX(5px)">
        <el-row type="flex">
          <el-col :span="24" class="text-num" style="transform: translateY(26px)">
            <ul>
              <li>80.00%</li>
              <li>80.00%</li>
            </ul>
          </el-col>
        </el-row>
        <el-row type="flex" style="transform: translateY(26px);margin-bottom: 10px">
          <el-col :span="12" class="text-str">
            G1 压气机效率
          </el-col>
          <el-col :span="12" class="text-str">
            G1 压气机效率
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="text-num" style="transform: translateY(26px)">
            <ul>
              <li>80.00%</li>
              <li>80.00%</li>
            </ul>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" class="text-str" style="transform: translateY(23px)">
            G2 压气机效率
          </el-col>
          <el-col :span="12" class="text-str" style="transform: translateY(23px)">
            G2 压气机效率
          </el-col>
        </el-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  components: {

  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
#centerLeft1 {
  padding: 0.2rem;
  height: 4.125rem;
  min-width: 6.2rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text-num {
    /*background: rgba(101, 132, 226, 0.1);*/
    padding: 0.15rem;
    position: relative;
    /*border: 1px solid rgba(25, 186, 139, 0.17);*/
    /*&::before {*/
    /*  content: "";*/
    /*  position: absolute;*/
    /*  width: 30px;*/
    /*  height: 10px;*/
    /*  border-top: 2px solid #02a6b5;*/
    /*  border-left: 2px solid #02a6b5;*/
    /*  top: 0;*/
    /*  left: 0;*/
    /*}*/
    /*&::after {*/
    /*  content: "";*/
    /*  position: absolute;*/
    /*  width: 30px;*/
    /*  height: 10px;*/
    /*  border-bottom: 2px solid #02a6b5;*/
    /*  border-right: 2px solid #02a6b5;*/
    /*  right: 0;*/
    /*  bottom: 0;*/
    /*}*/
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        text-align: center;
        height: 0.70rem;
        min-width: 2.5rem;
        line-height: 0.70rem;
        font-size: 0.55rem;
        color: #52abe7;
        padding: 0.05rem 0;
        font-family: electronicFont,sans-serif;
        font-weight: bold;
        &:first-child::after {
          content: "";
          position: absolute;
          height: 50%;
          width: 2px;
          background: rgba(255, 255, 255, 0.2);
          right: 0;
          top: 25%;
        }
      }
    }
  }
  .text-str {
    flex: 1;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.225rem;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
