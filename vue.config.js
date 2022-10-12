const { defineConfig } = require('@vue/cli-service')

// 配置element-plus按需引入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver()]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({ enabledCollections: ['ep'] })
        ]
      }),
      require('unplugin-element-plus/webpack')(),
      Icons({
        autoInstall: true
      })
    ]
  }
})
