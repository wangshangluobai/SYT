import request from "@/utils/request"
import {
  HospitalDetailInfo,
  HospitalDepatmentInfo,
  LoginData,
  UserLoginResponseData,
  HospitalWordData,
  DoctorResponseData,
  ReqPatientUser,
  DoctorInfoData,
} from "@/api/hospital/type"

enum API {
  HOSPITAL_DETAIL = "/hosp/hospital/",
  HOSPITAL_DEPARMENT = "/hosp/hospital/department/",
  USER_CODE = "/sms/send/",
  USER_LOGIN = "/user/login",
  HOSPITAL_WORK = "/hosp/hospital/auth/getBookingScheduleRule/",
  HOSPITAL_DOCTOR = "/hosp/hospital/auth/findScheduleList/",
  PATIENT_USER = "/user/patient/auth/findAll",
  DOCTOR = "/hosp/hospital/getSchedule/",
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

// 获取预约信息
export const reqHospitalWork = (
  page: number,
  limit: number,
  hoscode: string,
  depcode: string
) =>
  request.get<any, HospitalWordData>(
    API.HOSPITAL_WORK + `${page}/${limit}/${hoscode}/${depcode}`
  )

// 获取医生信息
export const reqHospitalDoctor = (
  hoscode: string,
  depcode: string,
  workDate: string
) =>
  request.get<any, DoctorResponseData>(
    API.HOSPITAL_DOCTOR + `${hoscode}/${depcode}/${workDate}`
  )

// 获取用户
export const reqPatientUser = () =>
  request.get<any, ReqPatientUser>(API.PATIENT_USER)

//获取挂号医生的信息
export const reqDoctorInfo = (scheduleId: string) =>
  request.get<any, DoctorInfoData>(API.DOCTOR + scheduleId)
