<template>
  <b-container>
    <div v-if="pod != null">
      <h3>My pod</h3>
      <!-- <b-button
      size="sm"
      variant="primary"
      @click="bureauChanged(pod.storage)">
      {{pod.storage}}
    </b-button> -->
    <BrowserButton :item="pod"/>
    <hr>
    <h3>My Friends</h3>
    <!-- {{ pod.friends}} -->
    <!-- <b-button
    size="sm"
    variant="primary"
    v-for="f in pod.friends" :key="f.webid"
    @click="bureauChanged(f.webId)">
    {{f.webId}}
  </b-button> -->
  <BrowserButton v-for="f in pod.friends" :key="f.webid" :item="f"/>
  <hr>
  <h3>My Workspaces</h3>
  <!-- {{pod.workspaces}} -->
  <!-- <b-button
  size="sm"
  variant="primary"
  v-for="w in pod.workspaces" :key="w.storage"
  @click="bureauChanged(w)">
  {{w.name}}
</b-button> -->
<BrowserButton v-for="w in pod.workspaces" :key="w.storage" :item="w"/>
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
