import type { AxiosResponse, AxiosRequestConfig } from 'axios'

interface myInterceptorsType {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (data: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}

interface myAxiosRequestConfig extends AxiosRequestConfig {
  myInterceptors?: myInterceptorsType
  isShowLoading?: boolean
}

export type { myInterceptorsType, myAxiosRequestConfig }
