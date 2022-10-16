<template>
  <div class="header">
    <div class="header-left" @click="isFoldFn">
      <div class="flod-btn">
        <el-icon class="icon" v-if="isFold"><Expand /></el-icon>
        <el-icon class="icon" v-else><Fold /></el-icon>
      </div>
    </div>
    <div class="header-right">right</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons'

export default defineComponent({
  components: {
    Fold,
    Expand
  },
  emits: ['isCollapse'],
  setup(props, { emit }) {
    let isFold = ref(false)
    const isFoldFn = function () {
      isFold.value = !isFold.value
      emit('isCollapse', isFold.value)
    }
    return { isFold, isFoldFn }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  user-select: none;
  .header-left {
    .flod-btn {
      .icon {
        font-size: 30px;
      }
    }
  }
}
</style>
