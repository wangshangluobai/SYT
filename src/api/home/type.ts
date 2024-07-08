// 首页模块 ts 数据基本类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 医院数据
export interface Hospital {
  id: string
  careateTime: string
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
  bookingRule: {
    cycle: number
    releaseTime: string
    stopTime: string
    quitDay: number
    quitTime: string
    rule: string[]
  }
}

// 医院容器
export type hospitalContent = Hospital[]

// 获取医院数据接口返回数据类型
export interface HospitalResponseData extends ResponseData {
  data: {
    content: hospitalContent
    pageable: {
      sort: {
        sorted: boolean
        unsorted: boolean
        empty: boolean
      }
      pageNumber: number
      pageSize: number
      offset: number
      paged: boolean
      unpaged: boolean
    }
    totalPages: number
    totalElements: number
    last: boolean
    first: boolean
    sort: {
      sorted: boolean
      unsorted: boolean
      empty: boolean
    }
    numberOfElements: number
    size: number
    number: number
    empty: boolean
  }
}

// 医院等级、区域字典
export interface HospitalLevelAndRegion {
  id: number
  createTime: string
  dictCode: string
  hasChildren: false
  isDeleted: number
  name: string
  param: {}
  parentId: number
  updateTime: string
  value: string
}

// 医院登记、区域字典容器
export type HospitalLevelAndRegionContent = HospitalLevelAndRegion[]

// 请求返回医院等级、区域相关字典
export interface HospitalDict extends ResponseData {
  data: HospitalLevelAndRegionContent
}

// 根据名字获取医院信息请求结构
export interface FindByHosNames extends ResponseData {
  data: hospitalContent
}