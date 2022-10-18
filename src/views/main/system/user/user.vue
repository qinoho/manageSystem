<template>
  <div class="user">
    <div class="searchPanel">
      <myForm :searchConfig="searchFormConfig" v-model="formData"></myForm>
    </div>
    <div class="contentPanel">
      <!-- <pageContent
        :contentableTitleConfig="tableContentConfig"
        :pageInfo="pageInfo"
      ></pageContent> -->
      <PageContent
        :contentableTitleConfig="tableContentConfig"
        :pageInfo="pageInfo"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import MyForm from '@/base-ui/form'

// import pageContent from '@/components/page-content'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/table.config'

export default defineComponent({
  components: {
    MyForm,
    PageContent
  },
  setup() {
    const formData = reactive({
      name: '',
      realName: '',
      cellphone: '',
      enable: '',
      createAt: ''
    })
    let pageInfo = reactive({
      name: 'users',
      module: 'systemUsersModule'
    })
    return {
      searchFormConfig,
      formData,
      tableContentConfig,
      pageInfo
    }
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
  .contentPanel {
    padding: 10px;
    margin-top: 20px;

    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.52);
    }
  }
}
</style>
