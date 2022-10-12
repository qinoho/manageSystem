import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'

// 全局引入
// import ElementPlus from 'element-plus'
// 按需引入 -  之前的方式，还需要配置babel - 最新的element-plus提供了自动按需引入的插件
// import { globalRegister } from '@/global'
// globalRegister(app)
import router from '@/router'
import store from '@/store'
import { setupStore } from '@/store/index'
const app = createApp(App)

setupStore()
app.use(router).use(store)
app.mount('#app')
