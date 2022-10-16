import { Module } from 'vuex'
import router from '@/router'

import {
  accountLoginRequest,
  accountLoginTestRequest,
  geuUserInfoRequest,
  getUserMenusRequest
} from '@/service/login'
import localCache from '@/utils/cache'
import { menusMapToRoutes } from '@/utils/mapMenusToRoutes'

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
      const userRouters = menusMapToRoutes(userMenus.data)
      userRouters.forEach((item) => {
        router.addRoute('main', item)
      })
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

      router.push('/main')
    },
    loadLocalCache({ commit }) {
      const token = localCache.getCacheItem('token')
      if (token) {
        commit('saveToken', token)
        // dispatch('getInitalDataAction', null, { root: true })
      }
      const userInfo = localCache.getCacheItem('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenus = localCache.getCacheItem('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
