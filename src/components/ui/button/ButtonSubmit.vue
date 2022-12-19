<template>
  <button
    class="button reset"
    :type="typeBtn"
    :disabled="isLoading || isDisabled"
  >
    <LoaderEllipsis v-if="isLoading" />

    <span :class="isLoading && 'transparent'">
      {{ text }}
    </span>
  </button>
</template>

<script setup>
import LoaderEllipsis from '@/components/loaders/LoaderEllipsis'
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  },
  typeBtn: {
    type: String,
    required: false,
    default: 'submit'
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
