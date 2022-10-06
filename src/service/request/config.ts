let BASE_URL: string

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://prod'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://dev'
} else {
  BASE_URL = 'http://test'
}

export { BASE_URL }
