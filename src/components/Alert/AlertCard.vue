<template>
  <div class="alert-card">
    <div class="alert-card__box" :class="'alert-card__box--' + alert.status">
      <h3 class="alert-card__title" :class="titleColor">
        {{ title }}!
      </h3>

      <div class="alert-card__body">
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const ALERT_TITLE = {
  info: 'Информация',
  success: 'Успешно',
  warning: 'Предупреждение',
  error: 'Ошибка'
}

const ALERT_TITLE_COLOR = {
  info: 'white',
  success: 'green',
  warning: 'yellow',
  error: 'red'
}

const props = defineProps({
  alert: {
    type: Object,
    required: true
  }
})

const title = computed(() => ALERT_TITLE[props.alert.status])
const titleColor = computed(() => ALERT_TITLE_COLOR[props.alert.status])
</script>
