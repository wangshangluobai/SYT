import request from "@/utils/request"
import {
  SubmitOrder,
  OrderResponseData,
  QrCode,
  PayReslt,
  UseringoResponseData,
  CertationTypeResponseData,
  UserParams,
  UserOrderInfoResponseData,
  AllUserResponseData,
  AllOrderStateResponseData,
  AddOrUpdateUser,
} from "@/api/user/type"

enum API {
  SUBMIT_ORDER = "/order/orderInfo/auth/submitOrder/",
  ORDER_INFO = "/order/orderInfo/auth/getOrderInfo/",
  ORDER_CANCEL = "/order/orderInfo/auth/cancelOrder/",
  QR_CODE = "/order/weixin/createNative/",
  PAY_RESULT = "/order/weixin/queryPayStatus/",
  USER_INFO = "/user/auth/getUserInfo",
  CERTIFICATION_TYPE = "/cmn/dict/findByDictCode/",
  //用户认证的结构
  USER_CERTATION = "/user/auth/userAuah",
  //获取用户订单号的数据
  USER_ORDER_INFO = "/order/orderInfo/auth/",
  //获取全部就诊人的信息
  ALL_USER = "/user/patient/auth/findAll",
  //获取订单的状态
  ORDER_STATE = "/order/orderInfo/auth/getStatusList",
  //获取城市的数据
  CITY = "/cmn/dict/findByParentId/",
  //新增就诊人接口
  ADD_USER = "/user/patient/auth/save",
  //更新已有的就诊人接口
  UPDATE_USER = "/user/patient/auth/update",
  //删除已有的就诊人
  DELETE_USER = "/user/patient/auth/remove/",
}

export const reqSubmitOrder = (
  hoscode: string,
  scheduleId: string,
  patientId: number
) =>
  request.post<any, SubmitOrder>(
    API.SUBMIT_ORDER + `${hoscode}/${scheduleId}/${patientId}`
  )

export const reqOrderInfo = (id: string) =>
  request.get<any, OrderResponseData>(API.ORDER_INFO + id)

export const reqCancelOrder = (id: string) =>
  request.get<any, any>(API.ORDER_CANCEL + id)

export const reqQRCode = (orderId: string) =>
  request.get<any, QrCode>(API.QR_CODE + orderId)

export const reqQueryPayState = (orderId: string) =>
  request.get<any, PayReslt>(API.PAY_RESULT + orderId)

export const reqUserInfo = () =>
  request.get<any, UseringoResponseData>(API.USER_INFO)

export const reqCertationType = (CertificatesType = "CertificatesType") =>
  request.get<any, CertationTypeResponseData>(
    API.CERTIFICATION_TYPE + CertificatesType
  )
export const reqUserCertation = (data: UserParams) =>
  request.post<any, any>(API.USER_CERTATION, data)
export const reqUserOrderInfo = (
  page: number,
  limit: number,
  patientId: string,
  orderStatus: string
) =>
  request.get<any, UserOrderInfoResponseData>(
    API.USER_ORDER_INFO +
      `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`
  )
export const reqAllUser = () =>
  request.get<any, AllUserResponseData>(API.ALL_USER)
export const reqOrderState = () =>
  request.get<any, AllOrderStateResponseData>(API.ORDER_STATE)
export const reqCity = (parentId: string) =>
  request.get<any, any>(API.CITY + parentId)

export const reqAddOrUpdateUser = (data: AddOrUpdateUser) => {
  if (data.id) {
    return request.put<any, any>(API.ADD_USER, data)
  } else {
    return request.post<any, any>(API.UPDATE_USER, data)
  }
}

export const reqRemoveUser = (id: number) =>
  request.delete<any, any>(API.DELETE_USER + id)
