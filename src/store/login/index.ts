import { Module } from 'vuex'

import {
  accountLoginRequest,
  accountLoginTestRequest,
  geuUserInfoRequest,
  getUserMenusRequest
} from '@/service/login'
import localCache from '@/utils/cache'

import type { IloginState } from './type'
import type { IrootState } from '../type'

const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
      localCache.setCache('token', token)
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)
    }
  },
  actions: {
    // 验证 是否有token token
    accountLoginRequestTest: async function () {
      const res = await accountLoginTestRequest()
      return res
      // 用来检测是否有token
    },
    // 用户登录
    accountLoginAction: async function ({ commit }, account) {
      // 登录生成token
      const { token, id } = await accountLoginRequest(account)
      commit('saveToken', token)

      // 获取用户信息
      const userInfo = await geuUserInfoRequest(id)
      commit('saveUserInfo', userInfo)

      // 获取用户菜单
      const userMenus = await getUserMenusRequest(id)
      commit('saveUserMenus', userMenus)
    }
  }
}

export default loginModule