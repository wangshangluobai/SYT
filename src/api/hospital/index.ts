import request from "@/utils/request"
import {
  HospitalDetailInfo,
  HospitalDepatmentInfo,
  LoginData,
  UserLoginResponseData,
} from "@/api/hospital/type"

enum API {
  HOSPITAL_DETAIL = "/hosp/hospital/",
  HOSPITAL_DEPARMENT = "/hosp/hospital/department/",
  USER_CODE = "/sms/send/",
  USER_LOGIN = "/user/login",
}

// 获取医院详情
export const reqHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalDetailInfo>(API.HOSPITAL_DETAIL + hoscode)

// 获取医院部门信息
export const reqHospitalDepartment = (hoscode: string) =>
  request.get<any, HospitalDepatmentInfo>(API.HOSPITAL_DEPARMENT + hoscode)

// 获取登录验证码
export const reqCode = (phone: string) =>
  request.get<any, any>(API.USER_CODE + phone)

// 用户登录
export const reqUserLogin = (data: LoginData) =>
  request.post<any, UserLoginResponseData>(API.USER_LOGIN, data)
