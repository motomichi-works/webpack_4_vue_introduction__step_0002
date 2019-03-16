const state = () => {
  return {
    value: 'defaultValue',
  };
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
}
