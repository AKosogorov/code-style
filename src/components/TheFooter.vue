<template>
  <footer class="footer">
    <div class="container between">
      <router-link to="/" class="logo">
        <IconLogo />
      </router-link>

      <NavMenu />
    </div>
  </footer>
</template>

<script setup>
import NavMenu from '@/components/ui/nav/NavMenu'
import IconLogo from '@/components/Icons/IconLogo'
</script>
