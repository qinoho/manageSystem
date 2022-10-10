<template>
  <div class="login-panel">
    <h2>MANAGE-SYSTEM</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="panelName">
      <el-tab-pane name="psw">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><UserFilled /></el-icon>
            <span>账号密码</span>
          </span>
        </template>
        <login-psw ref="loginPswRef"></login-psw>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><PhoneFilled /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserFilled, PhoneFilled } from '@element-plus/icons-vue'

import LoginPhone from './login-phone.vue'
import LoginPsw from './login-psw.vue'
export default defineComponent({
  components: {
    LoginPhone,
    LoginPsw,
    UserFilled,
    PhoneFilled
  },
  setup() {
    const loginPswRef = ref<InstanceType<typeof LoginPsw>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const panelName = ref('psw')
    // 主面板处理登录按钮 根据不同的标签选择不同的登陆处理逻辑
    function handleLoginClick() {
      if (panelName.value === 'psw') {
        loginPswRef.value?.loginAction()
      } else if (panelName.value === 'phone') {
        loginPhoneRef.value?.loginAction()
      }
    }
    return { handleLoginClick, panelName, loginPswRef, loginPhoneRef }
  }
})
</script>

<style lang="less">
.login-panel {
  text-align: center;
  width: 320px;
  height: inherit;
  margin: 100px auto;
  .demo-tabs {
    margin-top: 20px;
    .el-tabs__content {
      padding-bottom: 5px;
    }
    .el-tabs__header {
      .custom-tabs-label {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .login-btn {
    margin-top: 10px;
    width: 98%;
  }
}
</style>
