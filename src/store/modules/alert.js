import { spliceBy } from '@/utils/array/reactive'

const state = () => ({
  counter: 1,
  alertList: []
})

const mutations = {
  ADD_ALERT: (state, { id, status, message }) => {
    state.alertList.push({
      id,
      status,
      message
    })
  },
  DELETE_ALERT: (state, id) => spliceBy(id, state.alertList),
  INCREMENT_COUNTER: state => {
    state.counter++
  }
}

const actions = {
  setAlertWarning ({ dispatch }, message) {
    return dispatch('setAlert', { status: 'warning', message })
  },
  setAlertError ({ dispatch }, message) {
    return dispatch('setAlert', { status: 'error', message })
  },
  setAlertSuccess ({ dispatch }, message) {
    return dispatch('setAlert', { status: 'success', message })
  },

  setAlert ({ state, commit }, { status = 'info', message }) {
    const id = state.counter
    commit('INCREMENT_COUNTER')

    commit('ADD_ALERT', { id, status, message })

    setTimeout(() => {
      commit('DELETE_ALERT', id)
    }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
