<template>
  <!-- <h2>{{ $store.state.message }}</h2> -->
  <!-- <RouterLink to="/login">login</RouterLink> -->
  <!-- <router-link to="/login">login</router-link> -->
  <!-- <RouterLink to="/register">register</RouterLink> -->
  <!-- <router-link to="/register">register</router-link> -->
  <div class="app">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
.el-input__wrapper {
  user-select: none;
}
</style>
