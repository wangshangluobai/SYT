import request from "@/utils/request"
import { HospitalDetailInfo, HospitalDepatmentInfo } from "@/api/hospital/type"

enum API {
  HOSPITAL_DETAIL = "/hosp/hospital/",
  HOSPITAL_DEPARMENT = "/hosp/hospital/department/",
}

export const reqHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalDetailInfo>(API.HOSPITAL_DETAIL + hoscode)

export const reqHospitalDepartment = (hoscode: string) => request.get<any, HospitalDepatmentInfo>(API.HOSPITAL_DEPARMENT + hoscode)
