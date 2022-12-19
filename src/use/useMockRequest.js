import { useStore } from 'vuex'
import { mockRequest } from '@/mocks/mockRequest'

export function useMockRequest () {
  const store = useStore()

  async function sendMockRequest () {
    try {
      await mockRequest()
      await store.dispatch('alert/setAlertSuccess', 'Ваши конфиденциальные данные успешно отправлены')
    } catch (error) {
      await store.dispatch('alert/setAlertError', error.message)
    }
  }

  return { sendMockRequest }
}
