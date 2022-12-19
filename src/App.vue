<template>
  <TheHeader />

  <AlertList />

  <main>
    <router-view/>

    <div class="container">
      <TheNextBack class="max-600" />
    </div>
  </main>

  <TheButtonScroll v-if="showBtnScroll"/>

  <TheFooter/>
</template>

<script setup>
import AlertList from '@/components/Alert/AlertList'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheButtonScroll from '@/components/ui/button/TheButtonScroll'
import TheNextBack from '@/components/ui/nav/TheNextBack'

import { onMounted, ref } from 'vue'

const showBtnScroll = ref(false)

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

function scrollHandler () {
  showBtnScroll.value = window.scrollY > 300
}
</script>
