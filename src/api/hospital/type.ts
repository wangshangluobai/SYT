// 医院详情请求数据类型
export interface RequestHospitalDetail {
  code: number
  message: string
  ok: boolean
}

// 医院详情子项 BookingRule
export interface BookingRule {
  cycle: number
  releaseTime: string
  stopTime: string
  quitDay: number
  quitTime: string
  rule: string[]
}

// 医院详情子项 Hospital
export interface Hospital {
  id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    hostypeString: string
    fullAddress: string
  }
  hoscode: string
  hosname: string
  hostype: string
  provinceCode: string
  cityCode: string
  districtCode: string
  address: string
  logoData: string
  intro: string
  route: string
  status: number
  bookingRule: null
}

// 医院详情 data
export interface HospitalDetailData {
  bookingRule: BookingRule
  hospital: Hospital
}

// 医院详情请求返回数据
export interface HospitalDetailInfo extends RequestHospitalDetail {
  data: HospitalDetailData
}

// 医院部门字段
export interface HospitalDepatmentField {
  depcode: string
  depname: string
  children?: HospitalDepatmentField[]
}

// 医院部门容器
export type HospitalDepatmentContent = HospitalDepatmentField[]

// 医院部门接口返回数据
export interface HospitalDepatmentInfo extends RequestHospitalDetail {
  data: HospitalDepatmentContent
}

// 登录接口参数
export interface LoginData {
  phone: string
  code: string
}

// 登录接口返回用户信息数据
export interface UserInfo {
  name: string
  token: string
}

// 登录接口返回的数据
export interface UserLoginResponseData extends RequestHospitalDetail {
  data: UserInfo
}

// 挂号信息
export interface BaseMap {
  workDateString: string
  releaseTime: string
  bigname: string
  stopTime: string
  depname: string
  hosname: string
}

export interface WorkData {
  workDate: string
  workDateMd: string
  dayOfWeek: string
  docCount: number
  reservedNumber: null
  availableNumber: number
  status: number
}

export type BookingScheduleList = WorkData[]

export interface HospitalWordData extends RequestHospitalDetail {
  data: {
    total: number
    bookingScheduleList: BookingScheduleList
    baseMap: BaseMap
  }
}

//代表的是一个医生的数据
export interface Doctor {
  id: string
  createTime: string
  updateTime: string
  isDeleted: string
  param: {
    dayOfWeek: string
    depname: string
    hosname: string
  }
  hoscode: string
  depcode: string
  title: string
  docname: string
  skill: string
  workDate: string
  workTime: number
  reservedNumber: number
  availableNumber: number
  amount: number
  status: number
  hosScheduleId: string
}

//数组包含全部医生
export type DocArr = Doctor[]
//获取医生排班接口返回的数据
export interface DoctorResponseData extends RequestHospitalDetail {
  data: DocArr
}
