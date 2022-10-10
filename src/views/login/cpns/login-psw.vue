<template>
  <div class="login-psw">
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="rules"
      class="account-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号..." />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码..."
          show-password
        />
      </el-form-item>

      <div class="check_register">
        <el-checkbox v-model="isChecked" label="记住密码" size="small" />
        <el-link type="primary">立即注册</el-link>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import type { FormInstance, FormRules } from 'element-plus'

import localCache from '@/utils/cache'

import { account_rules } from '../config/index'
export default defineComponent({
  setup() {
    // 使用vuex
    const store = useStore()
    // 表单ref
    const ruleFormRef = ref<FormInstance>()
    // 账号密码
    const account = reactive({
      name: localCache.getCacheItem('name') ?? '',
      password: localCache.getCacheItem('password') ?? ''
    })
    // 是否记住密码
    let isChecked = ref(true)
    // 账号密码的规则
    const rules = reactive<FormRules>(account_rules)
    function loginAction() {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          if (isChecked.value) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.removeCacheItem('name')
            localCache.removeCacheItem('password')
          }
        }
        store.dispatch('loginModule/accountLoginAction', { ...account })
      })
    }
    return { ruleFormRef, account, rules, isChecked, loginAction }
  }
})
</script>

<style scoped lang="less">
.account-ruleForm {
  padding: 15px 15px 0;
  .check_register {
    display: flex;
    justify-content: space-between;
  }
}
</style>
