<template>
  <div class="main-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-menus"
      background-color="#222"
      :collapse="isClooapse"
      text-color="#b7bdc3"
      active-text-color="#fff"
    >
      <!-- <i class="">123</i> -->

      <template v-for="(item, index) in menus" :key="item.id">
        <template v-if="item.children && item.children.length">
          <el-sub-menu :index="index + ''">
            <template #title>
              <el-icon><component :is="handIconName(item.icon)" /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="(itemC, indexC) in item.children" :key="itemC.id">
              <el-menu-item-group>
                <el-menu-item :index="index + '-' + indexC">{{
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
import { defineComponent, ref, PropType } from 'vue'
import { useStore } from 'vuex'

interface Ifrom {
  name: string
}

import {
  Location,
  Monitor,
  Setting,
  Goods,
  ChatLineRound
} from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Location,
    Monitor,
    Setting,
    Goods,
    ChatLineRound
  },
  props: {
    message: {
      type: Array as PropType<Ifrom[]>,
      data() {
        return []
      }
    }
  },
  setup() {
    const store = useStore()
    const menus = store.state.loginModule.userMenus.data
    const isClooapse = ref(false)
    function handIconName(name: string): string {
      const handedName = name.split('-')
      return handedName.slice(2).join('-')
    }
    console.log(menus)
    return { menus, isClooapse, handIconName }
  }
})
</script>

<style scoped>
.el-menu-vertical-menus {
  border: 0;
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
  background-color: #0a60bd !important;
}
</style>
