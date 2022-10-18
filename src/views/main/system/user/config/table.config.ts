export const tableContentConfig = {
  propList: [
    { prop: 'name', label: '名称', width: '80' },
    { prop: 'realname', label: '真实姓名', width: '80' },
    { prop: 'cellphone', label: '电话号码', width: '150' },
    { prop: 'enable', label: '状态', width: '80', slotName: 'status' },
    {
      prop: 'updateAt',
      label: '上次登录时间',
      width: '200',
      slotName: 'updateAt'
    },
    { prop: 'createAt', label: '创建时间', width: '200', slotName: 'createAt' },
    { label: '操作', width: '100', slotName: 'handler' }
  ]
}
