import { isNavigationFailure, NavigationFailureType } from 'vue-router'
import router from '@/router'

export function goToPage (name, params) {
  return router
    .push({ name, params })
    .catch(onErrorNavigation)
}

export function goToPrevPage () {
  if (router.currentRoute.value.path !== '/') {
    router.back()
  }
}

function onErrorNavigation (error) {
  if (isNavigationFailure(error, NavigationFailureType.duplicated)) return

  console.error(error)
}
