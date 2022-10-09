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

import { myAxiosInstance } from './service'

type dataType = {
  data: string
  responseCode: number
  success: boolean
}

myAxiosInstance
  .request<dataType>({
    url: '/get'
  })
  .then((res) => {
    console.log(res)
    console.log(res.data)
    console.log(res.responseCode)
  })

const app = createApp(App)

app.use(router).use(store)
app.mount('#app')
