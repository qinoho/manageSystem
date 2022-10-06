import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    console.log('-------------')
    return config
  },
  (err) => {
    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('-------------')
    return res
  },
  (err) => {
    return err
  }
)

axios.get('http://httpbin.org/get').then((res) => {
  console.log(res)
})
