<template>
  <section>
    <div class="container">
      <h1 class="mb-30">Test</h1>

      <p class="fsz20 mb-20">
        Если Вы просмотрели всю информацию, то можете пройти небольшой тест.
      </p>

      <div class="flex gap-30">
        <button class="button button--green reset" @click="openModal">
          GO TEST
        </button>

        <button class="button button--yellow reset" @click="goToPage('HTML')">
          Еще не время
        </button>
      </div>
    </div>
  </section>

  <ModalConfirm
    v-if="showModal"
    title="ТЕСТ"
    @close="closeModal"
    @agree="onAgreeTest"
    @reject="onRejectTest"
  >
    <p class="mb-30" style="text-align: center">
      В этом веб-приложении бродят
      <b class="red" style="white-space: nowrap">
        коты-медведи
      </b>
      ?
    </p>
  </ModalConfirm>
</template>

<script setup>
import useModal from '@/use/useModal'
import ModalConfirm from '@/components/modals/ModalConfirm'
import { useStore } from 'vuex'
import { goToPage } from '@/utils/router'

const { showModal, openModal, closeModal } = useModal()
const store = useStore()

function onAgreeTest () {
  store.dispatch('alert/setAlertSuccess', 'Поздравляем, Вы прошли тест!')
}
function onRejectTest () {
  store.dispatch('alert/setAlertError', 'Вам следует быть внимательнее!')
}
</script>
