import { createStore } from 'vuex'
import loginModule from './login'
import systemUsersModule from './system/users'
const store = createStore({
  state() {
    return {
      name: '',
      age: 1
    }
  },
  modules: {
    loginModule,
    systemUsersModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalCache')
}

export default store
