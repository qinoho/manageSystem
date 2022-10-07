import type { AxiosResponse, AxiosRequestConfig } from 'axios'

interface myInterceptorsType<T> {
  requestInterceptors: (config: T) => T
  requestInterceptorsCatch: (err: any) => any
  responseInterceptors: (data: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch: (err: any) => any
}

interface myAxiosRequestConfig extends AxiosRequestConfig {
  myInterceptors?: myInterceptorsType<AxiosRequestConfig>
}

export type { myInterceptorsType, myAxiosRequestConfig }
