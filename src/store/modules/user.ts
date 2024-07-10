import { defineStore } from "pinia"
import { reqCode } from "@/api/hospital"

const useUserStore = defineStore("User", {
  state: () => {
    return {
      visiable: false,
    }
  },
  actions: {
    async getCode(phone: string) {
      const resoult: any = await reqCode(phone)
      if (resoult.code === 200) {
        return resoult.data
      } else {
        return Promise.reject(new Error(resoult.message))
      }
    }
  },
  getters: {},
})

export default useUserStore
