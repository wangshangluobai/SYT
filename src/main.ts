// 用来创建应用实例
import { createApp } from "vue"
// 清除默认样式
import "@/style/reset.scss"
// 根组件
import App from "@/App.vue"
// 路由扩展
import router from "@/router"
// pinia
import pinia from "@/store/index"

// 引入 elementUI 相关
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"

const app = createApp(App)

// 全局组件
import SYT_Header from "@/components/syt_header/index.vue"
import SYT_Footer from "@/components/syt_footer/index.vue"
import Login from "@/components/login/index.vue"
import CountDown from "@/components/countdown/index.vue";

// 注册全局组件
app.component("SYT-Header", SYT_Header)
app.component("SYT-Footer", SYT_Footer)
app.component("Login", Login)
app.component("CountDown", CountDown)

// 使用扩展
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(pinia)

// 创建实例并挂载
app.mount("#app")
