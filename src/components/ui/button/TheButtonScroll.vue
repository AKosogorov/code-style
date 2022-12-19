<template>
  <button
    class="button-scroll-up reset"
    type="button"
    @click="scrollTop"
  >
    <span class="arrow"></span>
    <span class="arrow"></span>
    <span class="arrow"></span>
  </button>
</template>

<script setup>
import { scrollTop } from '@/utils'
</script>
