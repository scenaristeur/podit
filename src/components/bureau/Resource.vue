<template>
  <div v-if="resource != null">

    <CKWysiwyg v-if="resource.file.internal_resourceInfo.contentType =='text/html'" />
    <div v-else>
      Content : {{content}}
      <hr>
      {{resource}}
    </div>

    <div>
      <hr>
      name: {{resource.name}}<br>
      url: <a :href="resource.url" target="_blank">{{resource.url}}</a><br>
      contenttype: {{resource.file.internal_resourceInfo.contentType}} /
      rawdata : {{resource.file.internal_resourceInfo.isRawData}}<br>
      permissions : {{resource.file.internal_resourceInfo.permissions}}

    </div>
    <!-- <hr>
    {{r}} -->
  </div>

</template>

<script>
export default {
  name: "Resource",
  components: {
    'CKWysiwyg': () => import('@/components/bureau/CKWysiwyg'),
    // 'BrowserButton': () => import('@/components/bureau/BrowserButton'),
  },
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
