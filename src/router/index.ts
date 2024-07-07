// 引入路由函数
import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  // 路由模式
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  // 路由切换——滚动行为控制
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})