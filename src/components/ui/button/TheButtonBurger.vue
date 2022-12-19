<template>
  <button class="button-burger button button--green reset" :class="isActive && 'active'">
    <span class="button-burger__box">
      <span class="button-burger__line"/>
      <span class="button-burger__line"/>
      <span class="button-burger__line"/>
    </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})
</script>
