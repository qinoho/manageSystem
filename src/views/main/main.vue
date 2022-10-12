<template>
  <div class="container">
    <el-container class="main-content">
      <el-aside width="210px" class="main-aside">
        <div class="login-theme">
          <img src="~@/assets/img/login-icon.svg" />
          <h3>MANAGESYSTEM</h3>
        </div>
        <navbar-menus></navbar-menus>
      </el-aside>
      <el-container class="main-page">
        <el-header class="main-page-header">
          <navbar-header></navbar-header>
        </el-header>
        <el-main class="main-page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { NavbarHeader, NavbarMenus } from './cpns'

export default defineComponent({
  components: {
    NavbarHeader,
    NavbarMenus
  },
  setup() {
    return {}
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
  img {
    width: 40px;
  }

  .login-theme {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 14px;
    h3 {
      margin-left: 10px;
    }
  }
}
.main-content {
  .main-aside {
    background-color: #222;
  }
  .main-page-header {
    background-color: #fff;
  }
}
</style>
