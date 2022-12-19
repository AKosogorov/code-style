import { ref } from 'vue'
import { hiddenBodyOverflow, visibleBodyOverflow } from '@/utils/dom'

export default function () {
  const showModal = ref(false)

  const openModal = () => {
    showModal.value = true
    hiddenBodyOverflow()
  }

  const closeModal = () => {
    showModal.value = false
    visibleBodyOverflow()
  }

  return {
    showModal,
    openModal,
    closeModal
  }
}
