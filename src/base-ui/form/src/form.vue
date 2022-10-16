<template>
  <el-form class="form" label-width="120px">
    <el-row>
      <template v-for="item in searchConfig?.formItems" :key="item.id">
        <el-col :span="8" v-bind="resizeOption">
          <el-form-item
            :label="item.label"
            label-width="100px"
            style="max-width: 350px"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input :type="item.type" v-model="formData[`${item.field}`]" />
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                style="width: 100%"
                v-model="formData[`${item.field}`]"
              >
                <template v-for="(option, index) in item.options" :key="index">
                  <el-option :label="option.label" :value="option.value" />
                </template>
              </el-select>
            </template>
            <template v-if="item.type === 'datepicker'">
              <el-date-picker
                v-bind="item.otherOption"
                start-placeholder="Start date"
                end-placeholder="End date"
                unlink-panels
                v-model="formData[`${item.field}`]"
              />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    resizeOption: {
      type: Object,
      default: () => {
        return {
          xl: 6, // ≥1920px
          lg: 8, // ≥1200px
          md: 12, // ≥992px
          sm: 24, // ≥768px
          xs: 24 // <768px,
        }
      }
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      function (newValue) {
        console.log('11')
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return { formData }
  }
})
</script>

<style scoped lang="less">
.form {
  padding: 20px 30px 0 0;
}
</style>
