<template>
  <div>
    Editor
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @blur="savedata"></ckeditor>
  </div>
</template>

<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
export default {
  name: "CKWysiwyg",
  data() {
    return {
      editor: InlineEditor, //ClassicEditor,
      editorData: '<p>Select a file or create a new one with "+".</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      // selected: null,
      // path: null,
      // options: [],
      // addingFile: false,
      // filename: ""
      // path: [
      //   {
      //     text: 'Admin',
      //     href: '#'
      //   },
      //   {
      //     text: 'Manage',
      //     href: '#'
      //   },
      //   {
      //     text: 'Library',
      //     active: true
      //   }
      // ]
    };
  },
  methods:{
    async savedata(){
      console.log(this.editorData)
      this.resource.content = `
    <html>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <body>
    ${this.editorData}
    </body>
    </html
    `
    //file.content +=
    console.log(this.resource)
     let fileSaved = await this.$updateFile(this.resource)
     console.log(fileSaved)
    }
  },
  watch:{
    editorContent(){
      this.editorData = this.editorContent
    }
  },
  computed: {
    // storage() {
    //   return this.$store.state.solid.pod != null && this.$store.state.solid.pod.storage
    // },
    editorContent() {
      return this.$store.state.bureau.content
    },
    resource() {
      return this.$store.state.bureau.resource
    },
  }
}
</script>

<style>

</style>
