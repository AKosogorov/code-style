<template>
  <transition-group
    v-if="show"
    class="alert-list"
    name="alert-list"
    tag="div"
  >
    <AlertCard
      v-for="alert of alerts"
      :key="alert.id"
      :alert="alert"
      @click="store.commit('alert/DELETE_ALERT', alert.id)"
    />
  </transition-group>
</template>
<script setup>
import AlertCard from '@/components/Alert/AlertCard'

import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const show = ref(true)
const timeout = ref(null)

const alerts = computed(() => store.state.alert.alertList)

watch(() => alerts.value.length, length => {
  clearTimeout(timeout.value)
  if (show.value && length) return

  if (!length) {
    timeout.value = setTimeout(() => {
      show.value = false
    }, 50)
  } else {
    show.value = true
  }
})
</script>
