export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $filter: any
  }
}
