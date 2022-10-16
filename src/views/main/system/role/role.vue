<template>
  <div>
    <h2 @myEvent="testevent">222222</h2>
    input<input @input="$emit('myEvent')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['myEvent'],
  setup() {
    const testevent = function () {
      console.log('first')
    }
    return { testevent }
  }
})
</script>

<style scoped></style>
