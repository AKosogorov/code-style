<template>
  <header class="header">
    <div class="container between">
      <TheButtonBurger :is-active="isActiveNav" @click="openNav" />

      <NavMenu :class="isActiveNav && 'active'" @close="closeNav" />

      <router-link to="/" class="logo">
        <IconLogo />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import NavMenu from '@/components/ui/nav/NavMenu'
import IconLogo from '@/components/Icons/IconLogo'
import TheButtonBurger from '@/components/ui/button/TheButtonBurger'
import { ref } from 'vue'
import { hiddenBodyOverflow, visibleBodyOverflow } from '@/utils/dom'

const isActiveNav = ref(false)

function openNav () {
  isActiveNav.value = true
  hiddenBodyOverflow()
}
function closeNav () {
  isActiveNav.value = false
  visibleBodyOverflow()
}
</script>
