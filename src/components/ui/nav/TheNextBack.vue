<template>
  <div class="next-back between gap-30">
    <router-link
      v-if="!isFirst"
      class="next-back__link next-back__link--back gap-10 reset"
      :to="{ name: routeNameBack }"
      @click="navHandler(routeNameBack)"
    >
      <span class="arrow"></span>
      Назад
    </router-link>

    <router-link
      v-if="!isLast"
      class="next-back__link next-back__link--next gap-10 reset"
      :to="{ name: routeNameNext }"
      @click="navHandler(routeNameNext)"
    >
      Вперед
      <span class="arrow"></span>
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { scrollTop } from '@/utils'

const router = useRouter()
const routes = computed(() => router.options.routes)
const count = computed(() => routes.value?.length || 0)

const currentIndex = computed(() => {
  const routeName = router.currentRoute.value?.name
  return routes.value.findIndex(item => item.name === routeName)
})

const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === count.value - 1)

const routeNameNext = computed(() => {
  if (isLast.value) return ''

  return routes.value[currentIndex.value + 1]?.name
})
const routeNameBack = computed(() => {
  if (isFirst.value) return ''

  return routes.value[currentIndex.value - 1]?.name
})

async function navHandler (routeName) {
  await router.push({ name: routeName })
  scrollTop()
}
</script>
