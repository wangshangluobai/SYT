<template>
  <div class="search">
    <!-- :fetch-suggestions="querySearch" -->
    <!-- v-model="searchWord" -->
    <el-autocomplete
      clearable
      placeholder="请输入医院名称" />
    <!-- @select="onSelect" -->
    <el-button
      type="primary"
      size="default"
      :icon="Search"
      >搜索</el-button
    >
  </div>
</template>

<script setup lang="ts">
  // 引入 El-plus 提供的图标
  import { Search } from "@element-plus/icons-vue"
</script>

<style scoped lang="scss">
  // Tips
  // 深度选择器
  // - 原生CSS >>>
  // - Less /deep/
  // - Scss ::v-deep
  .search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;

    ::v-deep(.el-autocomplete) {
      width: 600px;
      margin-right: 10px;
    }
  }
</style>
