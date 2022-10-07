import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { myAxiosRequestConfig } from './type'

class myAxios {
  instance: AxiosInstance

  constructor(config: myAxiosRequestConfig) {
    this.instance = axios.create(config)
    // 根据用户传入的参数为每个实例 使用 用户自定义 的拦截器
    this.instance.interceptors.request.use(
      config.myInterceptors?.requestInterceptors,
      config.myInterceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      config.myInterceptors?.responseInterceptors,
      config.myInterceptors?.responseInterceptorsCatch
    )

    // 为每个实例都创建拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('每个实例都有的request拦截器')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('每个实例都有的response拦截器')
        console.log(res)
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: myAxiosRequestConfig) {
    // 为每一个次的请求注册拦截器
    if (config.myInterceptors?.requestInterceptors) {
      config = config.myInterceptors.requestInterceptors(config)
    }
    this.instance.request(config)
  }
}

export default myAxios
