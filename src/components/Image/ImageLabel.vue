<template>
  <div class="image-label column gap-10">
    <strong
      class="image-label__text bold"
      :class="isBad ? 'red' : 'green'"
    >
      {{ labelText }}
    </strong>

    <img
      class="image-label__pic"
      :class="isGray && 'grayscale-100'"
      :src="require(`@/assets/images/${imgSrc}`)"
      alt="Some picture"
    >
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  imgSrc: {
    type: String,
    required: true
  },
  isBad: {
    type: Boolean,
    required: false,
    default: false
  },
  isGray: {
    type: Boolean,
    required: false,
    default: false
  }
})

const labelText = computed(() => {
  if (props.label) return props.label

  return props.isBad ? 'Bad' : 'Good'
})
</script>
