export const SET_TOKEN = (userInfo: string) => {
  localStorage.setItem("USERINFO", userInfo)
}

export const GET_TOKEN = () => {
  return localStorage.getItem("USERINFO")
}
