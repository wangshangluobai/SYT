<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <el-card class="card-box">
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button
            type="primary"
            size="default"
            :icon="User"
            >添加就诊人</el-button
          >
        </div>
      </template>
      <div class="user">
        <Visitor
          class="item"
          v-for="(u, index) in patientUsers"
          :user="u"
          @click="onChangeIndex(index)"
          :index="index"
          :currentIndex="currentIndex"
          :key="u.id" />
      </div>
    </el-card>
    <el-card class="card-box">
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
        </div>
      </template>
      <el-descriptions
        class="margin-top"
        :column="2"
        border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊日期:</div>
          </template>
          {{ doctorInfo.workDate }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院:</div>
          </template>
          {{ doctorInfo.param?.hosname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室:</div>
          </template>
          {{ doctorInfo.param?.depname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生姓名:</div>
          </template>
          {{ doctorInfo.docname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称:</div>
          </template>
          {{ doctorInfo.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长:</div>
          </template>
          {{ doctorInfo.skill }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生服务器:</div>
          </template>
          <span style="color: red">{{ doctorInfo.amount }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <div class="btn">
      <el-button
        type="primary"
        size="default"
        @click=""
        :disabled="currentIndex === -1"
        >确认挂号</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue"
  import { useRoute } from "vue-router"
  import { User } from "@element-plus/icons-vue"
  import Visitor from "@/pages/hospital/register/visitor.vue"
  import type {
    PatientUserContainer,
    ReqPatientUser,
    DoctorInfoData,
    Doctor,
  } from "@/api/hospital/type"
  import { reqPatientUser, reqDoctorInfo } from "@/api/hospital/index"

  let $route = useRoute()

  let patientUsers = ref<PatientUserContainer>([])
  let doctorInfo = ref<Doctor>({} as Doctor)
  let currentIndex = ref<number>(-1)

  const getPatientUser = async () => {
    const result: ReqPatientUser = await reqPatientUser()
    if (result.code === 200) {
      patientUsers.value = result.data
    }
  }

  const getDoctor = async () => {
    const result: DoctorInfoData = await reqDoctorInfo(
      $route.query.docId as string
    )
    if (result.code === 200) {
      doctorInfo.value = result.data
    }
  }

  const onChangeIndex = (index: number) => {
    currentIndex.value = index
  }

  onMounted(() => {
    getPatientUser()
    getDoctor()
  })
</script>

<style scoped lang="scss">
  .container {
    font-weight: 900;
    color: #7f7f7f;
    font-size: 20px;

    .card-box {
      margin: 10px 0px;

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .user {
        display: flex;
        flex-wrap: wrap;

        .item {
          width: 32%;
          margin: 5px;
        }
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      margin: 10px 0px;
    }
  }
</style>
