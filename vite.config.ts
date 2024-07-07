import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// 如果出现红色波浪线提示，请安装 @types/node 它是 TypeScript 的一个声明文件包，用于描述 Node.js 核心模块和常用的第三方库的类型信息

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        // Tips
        // 更改完这里的参数记得重启项目
        // target: "http://139.198.34.216:8201",
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
})
