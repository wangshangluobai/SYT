<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <el-card class="card-box">
    <template #header>
      <div class="card-header">
        <span>请选择就诊人</span>
        <el-button type="primary" size="default" :icon="User">添加就诊人</el-button>
      </div>
    </template>
    <div class="user">
      <Visitor class="item" v-for="i in 4" :key="i" />
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
    :size="size"
    border
  >
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          就诊日期：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          就诊医院：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          就诊科室：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          医生姓名：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          医生职称：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          医生专长：
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          医生服务费：
        </div>
      </template>
      <span style="color: tomato">100</span>
    </el-descriptions-item>
  </el-descriptions>
  </el-card>
  <div class="btn">
    <el-button type="primary" size="default" @click="">确认挂号</el-button>
  </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@element-plus/icons-vue";
import Visitor from "@/pages/hospital/register/visitor.vue";

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