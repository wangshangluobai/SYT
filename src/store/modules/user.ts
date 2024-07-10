import { defineStore } from "pinia"
import { reqCode, reqUserLogin } from "@/api/hospital"
import { UserLoginResponseData, LoginData, UserInfo } from "@/api/hospital/type"
import { UserState } from "@/store/modules/interface/index"
import { SET_TOKEN, GET_TOKEN } from "@/utils/user"

const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      visiable: false,
      userInfo: JSON.parse(localStorage.getItem("USERINFO") as string) || {},
    }
  },
  actions: {
    async getCode(phone: string) {
      const result: any = await reqCode(phone)
      if (result.code === 200) {
        return result.data
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async userLogin(loginParams: LoginData) {
      const result: UserLoginResponseData = await reqUserLogin(loginParams)
      if (result.code === 200) {
        this.userInfo = result.data
        localStorage.setItem("USERINFO", JSON.stringify(this.userInfo))
        return "ok"
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
