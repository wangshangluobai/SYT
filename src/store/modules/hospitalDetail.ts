import { defineStore } from "pinia"
import { reqHospitalDetail } from "@/api/hospital/index"
import type { HospitalDetailInfo } from "@/api/hospital/type"
import { DetailState } from "@/store/modules/interface"
import { HospitalDetailData } from "@/api/hospital/type"

const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      hospitalInfo: {} as HospitalDetailData,
    }
  },
  actions: {
    async getHospital(hoscode: string) {
      const resoult: HospitalDetailInfo = await reqHospitalDetail(hoscode)
      if (resoult.code === 200) {
        this.hospitalInfo = resoult.data
      }
    },
  },
  getters: {},
})

export default useDetailStore
