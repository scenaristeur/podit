// import Vue from 'vue'
const state = () => ({
  bureau: null,
  resource: null
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
  setResource(state,r){
    state.resource = r
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
