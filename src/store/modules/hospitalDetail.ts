import { defineStore } from "pinia"
import { reqHospitalDetail, reqHospitalDepartment } from "@/api/hospital/index"
import type { HospitalDetailInfo, HospitalDetailData, HospitalDepatmentContent,
  HospitalDepatmentInfo } from "@/api/hospital/type"
import { DetailState } from "@/store/modules/interface"

const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      hospitalInfo: {} as HospitalDetailData,
      hospitalDepartmentInfo: {} as HospitalDepatmentContent,
    }
  },
  actions: {
    async getHospital(hoscode: string) {
      const resoult: HospitalDetailInfo = await reqHospitalDetail(hoscode)
      if (resoult.code === 200) {
        this.hospitalInfo = resoult.data
      }
    },

    async getHospitalDepartment(hoscode: string) {
      const resoult: HospitalDepatmentInfo = await reqHospitalDepartment(hoscode)
      if (resoult.code === 200) {
        this.hospitalDepartmentInfo = resoult.data
      }
    }
  },
  getters: {},
})

export default useDetailStore
