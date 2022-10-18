import { Module } from 'vuex'

import { IrootState } from '@/store/type'
import { IsystemUsersState } from './type'

import { getUsersListInfo } from '@/service/main/system'
const systemUsers: Module<IsystemUsersState, IrootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersTotalCount: 0
  },
  getters: {
    usersPageListData(state) {
      return (pageName: string) => {
        const listData: any[] = (state as any)[`${pageName}List`] ?? []
        return listData
      }
    }
  },
  mutations: {
    // savePageListData: function (state, pageListData: any) {

    //   state.usersList = pageListData.list
    //   state.usersTotalCount = pageListData.totalList
    // },
    saveUsersListData: function (state, pageListData: any) {
      // console.log('++++++store')
      state.usersList = pageListData.list
      state.usersTotalCount = pageListData.totalList
    }
  },
  actions: {
    getPageListDataAction: async function ({ commit }, { pageName, data }) {
      const pageUrl = pageName + '/list'
      // console.log(pageUrl)
      const res = await getUsersListInfo(pageUrl, data)
      // commit('savePageListData', res.data)
      // 转换首字母大写 动态拼接路径

      const pageUrlCaption =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      // console.log('savePageListData--------', `save${pageUrlCaption}Data`)
      commit(`save${pageUrlCaption}ListData`, res.data)
    }
  }
}
export default systemUsers
