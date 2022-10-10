<template>
  <div class="login-phone">
    <p>暂未开放...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    function loginAction() {
      console.log('PHONE')
    }
    return { loginAction }
  }
})
</script>

<style scoped lang="less">
.description-phone {
  padding: 0;
  margin: 0 auto;
  height: inherit;
}
</style>
