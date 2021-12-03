<template>
  <b-container v-if="bureau != null">
    <h1>Bureau</h1>
    <h3>{{bureau.name}}</h3>
    <Navigator :storage="bureau.storage"/>
    <hr>
    {{bureau}}
  </b-container>
</template>

<script>
export default {
  name: "Bureau",
  components: {
    'Navigator': () => import('@/components/bureau/Navigator'),
  },
  computed:{
    bureau:{
      get () { return this.$store.state.bureau.bureau },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
