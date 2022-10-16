<template>
  <div class="user">
    <div class="searchPanel">
      <myForm :searchConfig="searchFormConfig" v-model="formData"></myForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { myForm } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: {
    myForm
  },
  setup() {
    const formData = reactive({
      name: '',
      realName: '',
      cellphone: '',
      enable: '',
      createAt: ''
    })
    return { searchFormConfig, formData }
  }
})
</script>

<style scoped lang="less">
.user {
  .searchPanel {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.52);
    }
    .title {
      margin: 0 auto;
    }
  }
}
</style>
