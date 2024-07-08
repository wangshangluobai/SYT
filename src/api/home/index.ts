import request from "@/utils/request"
import type { HospitalResponseData, HospitalDict, FindByHosNames } from "@/api/home/type"

enum API {
  HOSPITAL_URL = "/hosp/hospital/",
  HOSPITAL_LEVEL_AND_REGION_URL = "/cmn/dict/findByDictCode/",
  FIND_BY_HOSNAME = "/hosp/hospital/findByHosname/"
}

export const reqHospital = (
  page: number,
  limit: number,
  hostype: string,
  districtCode: string
) =>
  request.get<any, HospitalResponseData>(
    API.HOSPITAL_URL +
      `${page}/${limit}/?hostype=${hostype}&provinceCode=${districtCode}`
  )

export const reqHospitalLevelAndRegion = (dictCode: string) =>
  request.get<any, HospitalDict>(
    API.HOSPITAL_LEVEL_AND_REGION_URL + `${dictCode}`
  )

export const reqFindByHosName = (hosname: string) => request.get<any, FindByHosNames>(API.FIND_BY_HOSNAME + hosname)
