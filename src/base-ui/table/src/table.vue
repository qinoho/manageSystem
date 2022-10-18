<template>
  <div class="tab">
    <el-table :data="tableContent" border style="width: 100%">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column type="index" width="60" label="序号" align="center" />
      <template v-for="item in tableConfig.propList" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.width"
          align="center"
        >
          <template #default="scope" v-if="item.slotName">
            <slot :row="scope.row" :key="item.prop" :name="item.slotName">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'myTable',
  props: {
    tableConfig: {
      type: Object,
      required: true
    },
    tableContent: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
