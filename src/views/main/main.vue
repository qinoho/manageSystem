<template>
  <div class="container">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '66px' : '210px'" class="main-aside">
        <div class="login-theme">
          <img src="~@/assets/img/login-icon.svg" />
          <h3 v-show="!isCollapse">MANAGESYSTEM</h3>
        </div>
        <navbar-menus :sunIsCollapse="isCollapse"></navbar-menus>
      </el-aside>
      <el-container class="main-page">
        <el-header class="main-page-header">
          <navbar-header @isCollapse="isFold"></navbar-header>
        </el-header>
        <el-main class="main-page-content">
          <router-view @myEvent="aaa()"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { NavbarHeader, NavbarMenus } from './cpns'

export default defineComponent({
  components: {
    NavbarHeader,
    NavbarMenus
  },
  setup() {
    let isCollapse = ref(false)
    function isFold(value: any) {
      isCollapse.value = value
    }
    function aaa() {
      console.log('--')
    }
    return { isFold, isCollapse, aaa }
  }
})
</script>

<style scoped lang="less">
.container,
.main-content,
.main-page {
  height: 100%;
}
.container {
  background-color: #eeeeee;

  .login-theme {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 14px;
    margin-top: 10px;

    img {
      width: 35px;
    }
    h3 {
      margin-left: 10px;
    }
  }
}
.main-content {
  .main-aside {
    background-color: #222;
    transition: width 0.5s ease;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-page-header {
    background-color: #fff;
    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.12);

    transition: all 0.5s ease;
    &:hover {
      box-shadow: 0 14px 24px #0003;
    }
  }
}
</style>
