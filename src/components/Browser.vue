<template>
  <b-container>
    <div v-if="pod != null">
      Browse :
      <h5>My pod</h5>
      <BrowserButton :item="pod"/>
      <div v-if="pod.workspaces.length > 0">
        <h5>My Workspaces</h5>
        <BrowserButton v-for="w in pod.workspaces" :key="w.storage" :item="w"/>
      </div>
      <div v-if="pod.friends.length > 0">
        <h5>My Friends</h5>
        <BrowserButton v-for="f in pod.friends" :key="f.webid" :item="f"/>
      </div>
      <Bureau />
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Browser",
  components: {
    'Bureau': () => import('@/components/bureau/Bureau'),
    'BrowserButton': () => import('@/components/bureau/BrowserButton'),
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
