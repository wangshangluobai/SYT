import request from "@/utils/request"
import { HospitalDetailInfo } from "@/api/hospital/type"

enum API {
  HOSPITAL_DETAIL = "/hosp/hospital/",
}

export const reqHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalDetailInfo>(API.HOSPITAL_DETAIL + hoscode)
