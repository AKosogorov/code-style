<template>
  <BaseModal
    :title="title"
    @close="close"
  >
    <slot />

    <div class="center gap-20">
      <button
        class="button button--green reset"
        @click="onAgree"
      >
        Да
      </button>

      <button
        class="button button--red reset"
        @click="onReject"
      >
        Нет
      </button>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@/components/modals/BaseModal'
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits([
  'close',
  'agree',
  'reject'
])

defineProps({
  title: {
    type: String,
    required: false,
    default: 'Вы уверены?'
  }
})

const close = () => emit('close')

function onAgree () {
  close()
  emit('agree')
}

function onReject () {
  close()
  emit('reject')
}
</script>
