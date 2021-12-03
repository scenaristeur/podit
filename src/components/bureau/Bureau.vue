<template>
  <b-container>
    Bureau
    {{bureau}}
  </b-container>
</template>

<script>
export default {
  name: "Bureau",
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
