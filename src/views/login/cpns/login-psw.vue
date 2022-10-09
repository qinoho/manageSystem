<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>

      <div class="check_register">
        <el-checkbox v-model="isChecked" label="记住密码" size="small" />
        <el-link type="primary">立即注册</el-link>
      </div>

      <el-form-item>
        <el-button
          class="el-btn-login"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { account_rules } from '../config/index'
export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      name: '',
      password: ''
    })
    let isChecked = ref(false)

    const rules = reactive<FormRules>(account_rules)

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    return { ruleFormRef, ruleForm, rules, submitForm, isChecked }
  }
})
</script>

<style scoped lang="less">
.demo-ruleForm {
  padding: 15px;
  .check_register {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .el-btn-login {
    margin-top: 10px;
    flex: 1;
  }
}
</style>
