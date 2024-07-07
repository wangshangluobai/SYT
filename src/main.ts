// 用来创建应用实例
import { createApp } from "vue"
// 清除默认样式
import "@/style/reset.scss"
// 根组件
import App from "@/App.vue"
// 路由扩展
import router from "@/router"

// 引入 elementUI 相关
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)

// 全局组件
import SYT_Header from "@/components/syt_header/index.vue"
import SYT_Footer from "@/components/syt_footer/index.vue"

// 注册全局组件
app.component("SYT-Header", SYT_Header)
app.component("SYT-Footer", SYT_Footer)

// 使用扩展
app.use(router)
app.use(ElementPlus)

// 创建实例并挂载
app.mount("#app")
