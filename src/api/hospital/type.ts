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
  "depcode": string
      "depname": string
      "children"?: HospitalDepatmentField[]
}

// 医院部门容器
export type HospitalDepatmentContent = HospitalDepatmentField[]

// 医院部门接口返回数据
export interface HospitalDepatmentInfo extends RequestHospitalDetail {
  data: HospitalDepatmentContent
}