<template>
  <div
    class="lds-ellipsis"
    ref="loader"
    :style="style"
  >
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const loader = ref(null)
const style = computed(() => ({
  width: loader.value?.offsetHeight + 'px'
}))
</script>
