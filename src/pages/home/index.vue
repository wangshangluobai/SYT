<template>
  <div>
    <Carousel />
    <Search />
    <el-row class="main-box">
      <el-col :span="20">
        <Leval @transmitLeval="transmitLeval" />
        <Region @transmitRegion="transmitRegion" />
        <div
          class="card-box"
          v-if="hospitalInfo.length">
          <Card
            class="card-item"
            v-for="item in hospitalInfo"
            :hospitalInfo="item"
            :key="item.id" />
        </div>
        <el-empty
          v-else
          description="暂无数据" />
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="pageTotal"
          @size-change="onSizeChange"
          @current-change="onCurentChange"
          class="pageination" />
      </el-col>
      <el-col :span="4">
        <Tips />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "./carousel/index.vue"
  import Search from "./search/index.vue"
  import Leval from "./leval/index.vue"
  import Region from "./region/index.vue"
  import Card from "./card/index.vue"
  import Tips from "./tips/index.vue"

  import { ref, onMounted } from "vue"
  import { reqHospital } from "@/api/home/index"
  import type { hospitalContent, HospitalResponseData } from "@/api/home/type"

  let currentPage = ref<number>(1)
  let pageSize = ref<number>(10)
  let pageTotal = ref<number>(0)
  let hospitalInfo = ref<hospitalContent>([])

  let hostype = ref<string>("")
  let districtCode = ref<string>("")

  onMounted(() => {
    getHospitalInfo()
  })

  const getHospitalInfo = async () => {
    const result: HospitalResponseData = await reqHospital(
      currentPage.value,
      pageSize.value,
      hostype.value,
      districtCode.value
    )
    if (result.code === 200) {
      hospitalInfo.value = result.data.content
      pageTotal.value = result.data.totalElements || 0
    }
  }

  const onCurentChange = () => {
    getHospitalInfo()
  }
  const onSizeChange = () => {
    getHospitalInfo()
  }

  const transmitLeval = (value: string) => {
    hostype.value = value
    getHospitalInfo()
  }

  const transmitRegion = (value: string) => {
    districtCode.value = value
    getHospitalInfo()
  }
</script>

<style scoped lang="scss">
  .main-box {
  }
  .card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card-item {
      width: 48%;
      margin: 10px 0px;
    }
  }
  .pageination {
    flex-grow: 1;
    margin-bottom: 10px;
  }
</style>
