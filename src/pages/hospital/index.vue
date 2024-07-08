<template>
  <div class="hospital">
    <div class="menu">
      <div class="bread">
        <el-icon><HomeFilled /></el-icon>
        <span>/ 医院信息</span>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item
          index="/hospital/register"
          @click="changeActive('/hospital/register')">
          <el-icon><Monitor /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')">
          <el-icon><Document /></el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/detail"
          @click="changeActive('/hospital/detail')">
          <el-icon><Bell /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/close"
          @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/search"
          @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    Monitor,
    Search,
    Document,
    InfoFilled,
    Bell,
    HomeFilled,
  } from "@element-plus/icons-vue"
  import { useRouter, useRoute } from "vue-router"
  import { onMounted } from "vue"
  import useDetailStore from "@/store/modules/hospitalDetail"

  const $router = useRouter()
  const $route = useRoute()
  let detailStore = useDetailStore()

  onMounted(() => {
    detailStore.getHospital($route.query.hoscode)
  })

  const changeActive = (path) => {
    $router.push(path)
  }
</script>

<style scoped lang="scss">
  .hospital {
    display: flex;

    .menu {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .bread {
        color: #7f7f7f;
      }
    }

    .content {
      flex: 8;
    }
  }
</style>
