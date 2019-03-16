import textField from '@/javascripts/vue_applications/common/modules/textField'

const state = () => {
  return {
    count: 0,
  }
}

const getters = {

}

const actions = {

}

const mutations = {
  setState(state, payload) {
    state[payload.key] = payload.value;
  },
}

export default {
  // strictとnamespacedをそれぞれtrueにしておきます。
  strict: true,
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    textField,
  },
}
