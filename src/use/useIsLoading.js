import { ref } from 'vue'

export function useIsLoading () {
  const isLoading = ref(false)

  function startLoading () {
    isLoading.value = true
  }

  function finishLoading () {
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    finishLoading
  }
}
