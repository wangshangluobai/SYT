// 引入路由函数
import { title } from "process"
import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  // 路由模式
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      meta: {
        title: "医院",
      },
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
          meta: {
            title: "预约挂号",
          },
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          meta: {
            title: "预约通知",
          },
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          meta: {
            title: "医院详情",
          },
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          meta: {
            title: "停诊信息",
          },
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
          meta: {
            title: "查询",
          },
        },
        {
          path: "stepFirst",
          component: () => import("@/pages/hospital/register/stepFirst.vue"),
          meta: {
            title: "预约第一步",
          },
        },
        {
          path: "stepSecond",
          component: () => import("@/pages/hospital/register/stepSecond.vue"),
          meta: {
            title: "预约第二步",
          },
        },
      ],
    },
    {
      path: "/user",
      component: () => import("@/pages/user/index.vue"),
      children: [
        {
          path: "certification",
          component: () => import("@/pages/user/certification/index.vue"),
          meta: {
            title: "实名认证",
          },
        },
        {
          path: "order",
          component: () => import("@/pages/user/order/index.vue"),
          meta: {
            title: "挂号订单",
          },
        },
        {
          path: "patient",
          component: () => import("@/pages/user/patient/index.vue"),
          meta: {
            title: "就诊人管理",
          },
        },
        {
          path: "profile",
          component: () => import("@/pages/user/profile/index.vue"),
          meta: {
            title: "账号信息",
          },
        },
        {
          path: "feedback",
          component: () => import("@/pages/user/feedback/index.vue"),
          meta: {
            title: "信息反馈",
          },
        },
      ],
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
