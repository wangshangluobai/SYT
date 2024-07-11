<template>
  <div class="container">
    <div class="top">
      <div class="hosname">北京学校医院</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="dot">.</div>
      <div class="hosdeparment">多偶发</div>
    </div>
    <div class="center">
      <h1 class="time">2023nian</h1>
      <div class="item-box">
        <div class="item" v-for="i in 6">
          <div class="top1">123</div>
          <div class="bottom">456</div>
        </div>
      </div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  .top {
    display: flex;
    color: #7f7f7f;

    .line {
      width: 5px;
      height: 20px;
      background: tomato;
      margin: 0px 5px;
    }
  
    .dot {
      margin: 0px 5px;
    }
  }

  .center {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .time {
      font-weight: 900;
    }

    .item-box {
      width: 100%;
      margin: 40px 0px;
      display: flex;

      .item {
        flex: 1;
        border: 1px solid skyblue;
        margin: 0px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &.top1 {
          background: #e8f2ff;
          height: 30px;
        }
        .bottom {
          width: 100%;
          line-height: 60px;
          height: 60px;
          text-align: center;
        }
      }
    }
  }
}
</style>