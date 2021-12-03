// import Vue from 'vue'
const state = () => ({
  bureau: null,
  //pod: null,
})

const actions = {
  // async addWorkspace(context, w) {
  //   context.state.pod.workspaces.push(w)
  //   Vue.prototype.$addWorkspaceToPod(w)
  // },
}

const mutations = {
  setBureau(state,b){

    state.bureau = b
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
