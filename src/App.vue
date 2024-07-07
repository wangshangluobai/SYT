<script setup lang="ts"></script>

<template>
  <div class="container">
    <SYT-Header />
    <div class="content">content</div>
    <SYT-Footer />
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
