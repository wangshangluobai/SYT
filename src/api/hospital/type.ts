// 医院详情请求数据类型
export interface RequestHospitalDetail {
  code: number
  message: string
  ok: boolean
}

// 医院详情
export interface BookingRule {
  cycle: number
  releaseTime: string
  stopTime: string
  quitDay: number
  quitTime: string
  rule: string[]
}

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

export interface HospitalDetailData {
  bookingRule: BookingRule
  hospital: Hospital
}

export interface HospitalDetailInfo extends RequestHospitalDetail {
  data: HospitalDetailData
}
