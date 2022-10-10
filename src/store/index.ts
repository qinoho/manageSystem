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

export default store
