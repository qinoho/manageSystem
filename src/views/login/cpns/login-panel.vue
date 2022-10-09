<template>
  <div class="login-panel">
    <h2>MANAGE-SYSTEM</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><UserFilled /></el-icon>
            <span>账号密码</span>
          </span>
        </template>
        <login-psw></login-psw>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><PhoneFilled /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserFilled, PhoneFilled } from '@element-plus/icons-vue'

import LoginPhone from './login-phone.vue'
import loginPsw from './login-psw.vue'

export default defineComponent({
  components: {
    LoginPhone,
    loginPsw,
    UserFilled,
    PhoneFilled
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  text-align: center;
  height: 250px;
  width: 320px;
  margin: 100px auto;
  .demo-tabs {
    height: 260px;
    margin-top: 20px;
    .custom-tabs-label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
