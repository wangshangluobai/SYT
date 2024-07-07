<template>
  <el-carousel height="350px">
    <el-carousel-item
      v-for="item in 4"
      :key="item">
      <img
        :src="`https://picsum.photos/2400/700?${item}`"
        alt="随机图" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 350px;
  }
</style>
