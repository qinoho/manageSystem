import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      message: 'hello world'
    }
  }
})

export default store
