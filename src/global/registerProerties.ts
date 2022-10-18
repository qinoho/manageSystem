import { App } from 'vue'

import { formatUtc } from '@/utils/format'

export function regesterProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(time: string, formation = 'YYYY/MM/DD HH:mm:ss') {
      return formatUtc(time, formation)
    }
  }
}
