import axios from "axios"
import { ElMessage } from "element-plus"

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截器

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let status = error.response?.status
    switch (status) {
      case 404:
        ElMessage({
          type: "error",
          message: "请求路径错误",
        })
        break
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器异常",
        })
        break
      case 401:
        ElMessage({
          type: "error",
          message: "参数异常",
        })
        break
    }
    return Promise.reject(new Error(error))
  }
)

export default request
