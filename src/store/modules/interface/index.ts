import {
  HospitalDetailData,
  HospitalDepatmentContent,
  UserInfo,
} from "@/api/hospital/type"

export interface DetailState {
  hospitalInfo: HospitalDetailData
  hospitalDepartmentInfo: HospitalDepatmentContent
}

export interface UserState {
  visiable: boolean
  userInfo: UserInfo
}
