import myAxios from './request'

const myAxiosInstance = new myAxios({
  baseURL: 'http://httpbin.org',
  isShowLoading: false
})

export { myAxiosInstance }
