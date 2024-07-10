import { defineStore } from "pinia"
import { reqHospitalDetail, reqHospitalDepartment } from "@/api/hospital/index"
import type {
  HospitalDetailInfo,
  HospitalDetailData,
  HospitalDepatmentContent,
  HospitalDepatmentInfo,
} from "@/api/hospital/type"
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
      const result: HospitalDetailInfo = await reqHospitalDetail(hoscode)
      if (result.code === 200) {
        this.hospitalInfo = result.data
      }
    },

    async getHospitalDepartment(hoscode: string) {
      const result: HospitalDepatmentInfo = await reqHospitalDepartment(hoscode)
      if (result.code === 200) {
        this.hospitalDepartmentInfo = result.data
      }
    },
  },
  getters: {},
})

export default useDetailStore
