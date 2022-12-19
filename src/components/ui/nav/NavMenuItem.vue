<template>
  <li>
    <router-link :to="{ name: route.name }" @click="navHandler(route.name)">
      {{ route.name }}
    </router-link>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { goToPage } from '@/utils/router'
const emit = defineEmits(['go-to-view'])

defineProps({
  route: {
    type: Object,
    required: true
  }
})

function navHandler (name) {
  goToPage(name)
  emit('go-to-view')
}
</script>
