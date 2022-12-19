<template>
  <teleport to="body">
    <div id="modal" class="modal" :class="activeClass">
      <div
        class="modal__wrap"
        @mousedown.self="onClose"
      >
        <div class="modal__content">
          <button
            class="btn-cross btn-cross--modal reset"
            @click="onClose"
          />

          <h3 v-if="title" class="modal__title">
            {{ title }}
          </h3>

          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted, ref, defineEmits } from 'vue'

const emit = defineEmits(['close'])
defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  }
})
const activeClass = ref('')

onMounted(() => {
  activeClass.value = 'modal--active'
})

onUnmounted(() => {
  activeClass.value = ''
})

const onClose = () => emit('close')
</script>
