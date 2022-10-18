<template>
  <myTable
    :tableConfig="contentableTitleConfig"
    :tableContent="tableContentSotre"
  >
    <template #status="scope">
      <el-button
        :type="scope.row[scope.key] === 1 ? 'success' : 'danger'"
        text
        bg
        >{{ scope.row[scope.key] === 1 ? '正常' : '禁用' }}
      </el-button>
    </template>
    <template #updateAt="scope">
      {{ $filter.formatTime(scope.row[scope.key]) }}
    </template>
    <template #createAt="scope">
      {{ $filter.formatTime(scope.row[scope.key]) }}
    </template>
    <template #handler="scope">
      <el-button
        type="primary"
        :icon="Edit"
        size="small"
        @click="test(scope)"
      />
      <el-button type="primary" :icon="Delete" size="small" />
    </template>
  </myTable>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import myTable from '@/base-ui/table'

import { Delete, Edit } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    myTable
  },
  props: {
    contentableTitleConfig: {
      type: Object,
      required: true
    },
    pageInfo: {
      type: Object,
      reqired: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('systemUsersModule/getPageListDataAction', {
      pageName: 'users',
      data: {
        offset: 0,
        size: 10
      }
    })
    const tableContentSotre = computed(function () {
      return store.getters[`${props.pageInfo?.module}/usersPageListData`](
        `${props.pageInfo?.name}`
      )
      // return store.state.systemUsersModule.usersList
    })
    function test(scope: any) {
      console.log(scope)
    }
    return { tableContentSotre, Delete, Edit, test }
  }
})
</script>

<style scoped></style>
