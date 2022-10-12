import { myAxiosInstance } from '../index'

import { AccountType, AccountLoginType } from './type'

enum LOGIN_URL_API {
  AccountTest = '/test',
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: AccountType) {
  return myAxiosInstance.request<AccountLoginType>({
    url: LOGIN_URL_API.AccountLogin,
    method: 'POST',
    data: account,
    myInterceptors: {
      responseInterceptors(res) {
        return res.data
      }
    }
  })
}
export function accountLoginTestRequest() {
  return myAxiosInstance.request<AccountLoginType>({
    url: LOGIN_URL_API.AccountTest,
    method: 'get',
    isShowLoading: false
  })
}
export function geuUserInfoRequest(id: number) {
  return myAxiosInstance.request<AccountLoginType>({
    url: LOGIN_URL_API.UserInfo + id,
    method: 'get',
    isShowLoading: false
  })
}
export function getUserMenusRequest(id: number) {
  return myAxiosInstance.request<AccountLoginType>({
    url: LOGIN_URL_API.UserMenus + id + '/menu',
    method: 'get',
    isShowLoading: true
  })
}
