<template>
  <b-container v-if="bureau != null">
    <hr>
    <!-- <h1>Bureau</h1> -->
    <h3>{{bureau.name}}</h3>
    <BrowserButton v-for="f in bureau.friends" :key="f.webid" :item="f"/>
    <Navigator :storage="bureau.storage"/>
    <hr>

    <Resource />
    <hr>
    <!-- {{bureau}} -->
  </b-container>
</template>

<script>
export default {
  name: "Bureau",
  components: {
    'Navigator': () => import('@/components/bureau/Navigator'),
    'BrowserButton': () => import('@/components/bureau/BrowserButton'),
    'Resource': () => import('@/components/bureau/Resource'),
  },
  computed:{
    bureau:{
      get () { return this.$store.state.bureau.bureau },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    resource:{
      get () { return this.$store.state.bureau.resource },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
