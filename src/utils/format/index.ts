import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
import utc from 'dayjs/plugin/utc'

dayjs.extend(isLeapYear) // 使用插件
dayjs.extend(utc)
dayjs.locale('zh-cn') // 使用本地化语言

export function formatUtc(time: string, formation: string) {
  return dayjs.utc(time).format(formation)
}
