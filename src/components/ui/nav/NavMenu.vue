<template>
  <nav class="nav">
    <ul class="nav__list flex gap-20" @mousedown.self="closeNav">
      <NavMenuItem
        v-for="item of navMenu"
        :key="item.id"
        :route="item"
        @goToView="closeNav"
      />
    </ul>
  </nav>
</template>

<script setup>
import NavMenuItem from '@/components/ui/nav/NavMenuItem'
import { defineEmits } from 'vue'
const emit = defineEmits(['close'])

const navMenu = [
  'Home',
  'HTML',
  'CSS',
  'JS',
  'DRY',
  'App',
  'Vuex',
  'Test'
].map((item, i) => ({
  name: item,
  id: i + 1
}))

const closeNav = () => emit('close')
</script>
