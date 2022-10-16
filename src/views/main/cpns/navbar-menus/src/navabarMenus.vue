<template>
  <div class="main-menu">
    <el-menu
      :default-active="currentId + ''"
      class="el-menu-vertical-menus"
      background-color="#222"
      :collapse="sunIsCollapse"
      text-color="#b7bdc3"
      active-text-color="#fff"
    >
      <!-- <i class="">123</i> -->

      <template v-for="item in menus" :key="item.id">
        <template v-if="item.children && item.children.length">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon class="title-icon"
                ><component :is="handIconName(item.icon)"
              /></el-icon>
              <span class="title-text">{{ item.name }}</span>
            </template>
            <template v-for="itemC in item.children" :key="itemC.id">
              <el-menu-item-group @click="handRouteTo(itemC.url)">
                <el-menu-item :index="itemC.id + ''">{{
                  itemC.name
                }}</el-menu-item>
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import {
  Location,
  Monitor,
  Setting,
  Goods,
  ChatLineRound
} from '@element-plus/icons-vue'

import { useRouter, useRoute } from 'vue-router'
import { pathMapActiveMenu } from '@/utils/mapMenusToRoutes'
export default defineComponent({
  components: {
    Location,
    Monitor,
    Setting,
    Goods,
    ChatLineRound
  },
  props: {
    sunIsCollapse: {
      type: Boolean,
      data() {
        return false
      }
    }
  },
  setup() {
    // 1.获取用户菜单
    const store = useStore()
    const menus = store.state.loginModule.userMenus.data

    // 处理图标名称 --- 接口返回的是class 现在需要使用动态组件
    function handIconName(name: string): string {
      const handedName = name.split('-')
      return handedName.slice(2).join('-')
    }
    // 点击跳转路由
    const router = useRouter()
    function handRouteTo(url: string) {
      router.push(url)
    }

    // 根据当前路由。匹配需要选中的菜单
    let currentId = ref<string>()
    const route = useRoute()

    const men = pathMapActiveMenu(menus, route.path)
    currentId = men.id
    return { menus, handIconName, handRouteTo, currentId }
  }
})
</script>

<style scoped lang="less">
.el-menu-vertical-menus {
  border: 0;
}
.el-sub-menu__title:hover .title-icon,
.el-sub-menu__title:hover .title-text {
  color: #fff;
}
.el-menu-item:hover {
  color: #fff !important;
}
::v-deep .el-menu-item-group__title {
  display: none !important;
}
.el-menu-item-group {
  height: 50px;
  line-height: 50px;
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #000 !important;
}
</style>
