import myAxios from './request'
import localCache from '@/utils/cache'
import { BASE_URL } from './request/config'

const myAxiosInstance = new myAxios({
  baseURL: BASE_URL,
  isShowLoading: true,
  myInterceptors: {
    requestInterceptors: (config) => {
      const token = localCache.getCacheItem('token')
      if (token) {
        config.headers && (config.headers.Authorization = `Bearer ${token}`)
      }
      return config
    },
    responseInterceptors: (res) => {
      return res
    }
  }
})

export { myAxiosInstance }
