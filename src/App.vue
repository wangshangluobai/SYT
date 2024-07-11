<script setup lang="ts">
import useUserStore from "@/store/modules/user"

let userStore = useUserStore()
</script>

<template>
  <div class="container">
    <SYT-Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <SYT-Footer />
    <Login v-if="userStore.visiable" />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      margin-top: 70px;
      width: 1200px;
      min-height: 700px;
    }
  }
</style>
