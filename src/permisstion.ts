import router from "./router"
// @ts-ignore
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
import pinia from "@/store"
import useUserStore from "@/store/modules/user"

Nprogress.configure({ showSpinner: false })
let whiteList = [
  "/home",
  "/hospital/register",
  "/hospital/detail",
  "/hospital/notice",
  "/hospital/close",
  "/hospital/search",
]
let userStore = useUserStore(pinia)

router.beforeEach((to, from, next) => {
  Nprogress.start()
  let token = userStore.userInfo.token
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: "/home", query: { redirect: to.fullPath } })
    }
  }
  document.title = `尚医通-${to.meta.title}`
})

router.afterEach((to, from) => {
  Nprogress.done()
})
