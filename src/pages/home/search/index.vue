<template>
  <div class="search">
    <el-autocomplete
      v-model="searchKeyWord"
      clearable
      placeholder="请输入医院名称"
      :fetch-suggestions="fetchData"
      :trigger-on-focus="false"
      @select="onSelect" />
    <el-button
      type="primary"
      size="default"
      :icon="Search"
      @click="onSearch"
      >搜索</el-button
    >
  </div>
</template>

<script setup lang="ts">
  // 引入 El-plus 提供的图标
  import { Search } from "@element-plus/icons-vue"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import { reqFindByHosName } from "@/api/home/index"
  import { FindByHosNames } from "@/api/home/type"

  let $router = useRouter()

  let searchKeyWord = ref<string>("")

  const onSearch = async () => {
    const resoult: FindByHosNames = await reqFindByHosName()
    if (resoult.code === 200) {
      //
    }
  }
  const fetchData = async (keyword, callback) => {
    if (!keyword) return

    const resoult: FindByHosNames = await reqFindByHosName(keyword)
    const showList = resoult.data.map((i) => ({
      value: i.hosname,
      hoscode: i.hoscode,
    }))

    callback(showList)
  }
  const onSelect = (item: any) => {
    $router.push({
      path: "/hospital/register",
      query: { hoscode: item.hoscode },
    })
  }
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
