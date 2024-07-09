<template>
  <div class="notice">
    <h1>{{hospitalStore.hospitalInfo.hospital?.hosname}}预约须知</h1>
    <div class="top"></div>
    <div class="info">
      <div class="tip">一、预约实名制</div>
      <div class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis porro? Quibusdam laborum sed ipsam dicta, in omnis delectus dolorum incidunt ex tempore architecto! Obcaecati, expedita. Maiores eveniet est tenetur!</div>
      <div class="tip">二、预约挂号</div>
      <div class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum eos dolorum voluptatum quam quo corrupti beatae eveniet? Assumenda rerum dolor nulla laborum velit quisquam magnam inventore quasi architecto sed.</div>
      <div class="tip">三、取消预约</div>
      <div class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam repellendus sed distinctio harum esse quisquam sunt reiciendis nobis iure quasi ab expedita quae ad id nesciunt officiis architecto nihil!</div>
      <div class="tip">四、爽约处理</div>
      <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quo nostrum reprehenderit, dolores ipsam harum ducimus quae adipisci sed est soluta dignissimos delectus. Ad, rerum quia perferendis sit numquam optio.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDetailStore from "@/store/modules/hospitalDetail"

let hospitalStore = useDetailStore()
</script>

<style scoped lang="scss">
.notice {

  h1 {
    text-align: center;
    font-size: 28px;
  }

  .top {
    color: #7f7f7f;
    margin: 10px 0px;
  }

  .info {
    .tip {
      color: tomato;
      font-weight: 900;
    }

    .text {
      color: #7f7f7f;
      margin: 10px 0px;
      line-height: 30px;
    }
  }
}
</style>
