import { createStore } from 'vuex'
import loginModule from './login'

const store = createStore({
  state() {
    return {
      name: '',
      age: 1
    }
  },
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalCache')
}

export default store
