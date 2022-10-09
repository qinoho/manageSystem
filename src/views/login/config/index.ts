export const account_rules = {
  name: [
    { required: true, message: '账号是必需的', trigger: 'blur' },
    { pattern: /^[A-z0-9]{6,12}$/, message: '账号长度6-12位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码是必需的', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,}$/, message: '密码必须长度6位', trigger: 'blur' }
  ]
}
