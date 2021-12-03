<template>
  <b-container>
    <div v-if="pod != null">
      My pod <br>
      <b-button
      size="sm"
      variant="primary"
      @click="bureauChanged(pod.storage)">
      {{pod.storage}}
    </b-button>
    <hr>
    My Friends
    {{ pod.friends}}
    <b-button
    size="sm"
    variant="primary"
    v-for="f in pod.friends" :key="f.webid"
    @click="bureauChanged(f.webId)">
    {{f.webId}}
  </b-button>
    <hr>
    My Workspaces
    <!-- {{pod.workspaces}} -->
    <b-button
    size="sm"
    variant="primary"
    v-for="w in pod.workspaces" :key="w.url"
    @click="bureauChanged(w)">
    {{w.name}}
  </b-button>
  <Bureau />
</div>
</b-container>
</template>

<script>
export default {
  name: "Browser",
  components: {
    'Bureau': () => import('@/components/bureau/Bureau'),
  },
  methods: {
    bureauChanged(b){
      console.log(b)
      this.$store.commit('bureau/setBureau',b)
    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
