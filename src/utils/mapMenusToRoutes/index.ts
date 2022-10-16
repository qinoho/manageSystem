let initialMenu: any = undefined
let initialRoute: any = undefined

export const menusMapToRoutes = function (menus: any) {
  // 获取本地所有的路由 --- 匹配用户的菜单 --- 动态的生成路由配置
  const routes = require.context('../../router/main', true, /\.ts$/)
  const fileRoutes: Array<any> = []
  routes.keys().forEach((fileRouteItem) => {
    if (fileRouteItem.indexOf('main.ts') !== -1) return
    const routeItem = require('../../router/main' + fileRouteItem.split('.')[1])
    fileRoutes.push(routeItem.default)
  })
  // 定义变量 存储 动态路由
  const localRoutes: any[] = []

  const _mapMenusToRoutes = function (menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = fileRoutes.find((route) => route.path === menu.url)
        if (!initialMenu) initialMenu = menu
        if (!initialRoute) initialRoute = route
        if (route) {
          localRoutes.push(route)
        }
      } else {
        _mapMenusToRoutes(menu.children)
      }
    }
  }
  _mapMenusToRoutes(menus)

  return localRoutes
}

export function pathMapActiveMenu(menus: any[], path: string): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const currentMenu = pathMapActiveMenu(menu.children, path)
      if (currentMenu) {
        return currentMenu
      }
    } else {
      if (menu.url === path) {
        console.log('tttt')
        return menu
      }
    }
  }
}

export { initialMenu, initialRoute }
