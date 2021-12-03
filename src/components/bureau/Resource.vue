<template>
  <div v-if="resource != null">
    name: {{resource.name}}<br>
    contenttype: {{resource.file.internal_resourceInfo.contentType}} / rawdata : {{resource.file.internal_resourceInfo.isRawData}}
    <hr>
    Content : {{content}}
    <hr>
    {{resource}}
    <!-- <hr>
    {{r}} -->
  </div>

</template>

<script>
export default {
  name: "Resource",
  data(){
    return {
      //content: null
      //  r: null
    }
  },
  watch:{
    async resource(){
      await this.$getResource(this.resource)
    }
  },
  computed:{
    resource:{
      get () { return this.$store.state.bureau.resource },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    content:{
      get () { return this.$store.state.bureau.content },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
