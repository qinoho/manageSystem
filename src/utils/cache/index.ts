class localCache {
  setCache(key: string, value: any) {
    if (value) window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCacheItem(key: string) {
    return window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key) ?? '')
      : ''
  }
  removeCacheItem(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCacheAll() {
    window.localStorage.clear()
  }
}

export default new localCache()
