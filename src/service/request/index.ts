import axios from 'axios'
import { ElLoading } from 'element-plus'

import type { AxiosInstance } from 'axios'

import { myAxiosRequestConfig } from './type'

class myAxios {
  instance: AxiosInstance
  loadingInstance: any
  isShowLoading?: boolean = true

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
    this.isShowLoading = config.isShowLoading
    // 为每个实例都创建拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('每个实例都有的request拦截器')
        // 根据用户自定义是否展示 loading 动画
        if (this.isShowLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loaing....',
            background: 'rgba(0, 0, 0, 0.5)',
            fullscreen: true
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('每个实例都有的response拦截器')
        this.loadingInstance?.close()
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request<T = any>(config: myAxiosRequestConfig): Promise<T> {
    const isShowLoading = config.isShowLoading
    !isShowLoading && (this.isShowLoading = false)
    // 为每一个次的请求注册拦截器
    return new Promise((resolve, reject) => {
      if (config.myInterceptors?.requestInterceptors) {
        config = config.myInterceptors.requestInterceptors(config)
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.myInterceptors?.responseInterceptors) {
            res = config.myInterceptors.responseInterceptors(res)
            this.isShowLoading = true
          }
          console.log(res)
          resolve(res.data)
          this.isShowLoading = true
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default myAxios
