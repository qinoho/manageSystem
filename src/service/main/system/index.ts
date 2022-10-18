import { myAxiosInstance } from '@/service/index'

function getUsersListInfo(pageUrl: string, data: object) {
  return myAxiosInstance.request({
    url: pageUrl,
    method: 'POST',
    data
  })
}
export function getPageList(pageUrl: string, data: object) {
  return myAxiosInstance.request({
    url: pageUrl,
    method: 'POST',
    data
  })
}

export { getUsersListInfo }
