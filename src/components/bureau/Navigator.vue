un<template>
  <b-container>
    Nav : <b-button variant="primary" @click="init">{{storage}}</b-button>
    <b-button v-if="current != null" variant="primary" @click="up">up</b-button>
    <b-button size="sm" variant="outline-info"  @click.stop="addFolder(r)" style="float:left">
      <b-icon-folder-plus @click.stop="addFolder()" variant="info" ></b-icon-folder-plus>
    </b-button>
    <b-button size="sm" variant="outline-info"  @click.stop="addFile()" style="float:left">
      <b-icon-file-plus @click.stop="addFile()" variant="info" ></b-icon-file-plus>
    </b-button>

    <hr>

    <b-list-group>
      <b-list-group-item
      v-for="r in resources" :key="r.url"
      button
      @click="pathChange(r)">
      <!-- {{r.name}} -->
      <div class="input-group" style="display:table; width:100%;">

        <!-- <b-button class="unstyled-button" variant="outline-warning">
        <b-icon-folder-fill></b-icon-folder-fill></b-button> -->
        {{ r.name }}
        <!-- <span style="display: table-cell; border:1px solid #ccc; padding: 0 8px; vertical-align: middle;">Cras justo odio</span> -->

        <!-- <span style="display: table-cell; width: 40px;">
        <button class="btn btn-default" type="button"><span>ᐅ</span> Go!</button>
      </span> -->

      <span style="display: table-cell; width: 145px;">
        <!-- <button class="btn btn-default" type="button"><span>ᐅ</span>  Go!</button> -->
        <!-- class="unstyled-button" -->

        <b-button size="sm" variant="outline-info"  @click.stop="copy(r)" style="float:left">
          <b-icon-clipboard @click.stop="copy(r)" variant="info" ></b-icon-clipboard>
        </b-button>
        <Share :item="r" style="float:left"/>
        <b-button size="sm" variant="outline-warning"  @click.stop="move(r)" style="float:left">
          <b-icon-file-plus @click.stop="move(r)" variant="warning" ></b-icon-file-plus>
        </b-button>
        <b-button size="sm" variant="outline-danger"  @click.stop="trash(r)" style="float:left">
          <b-icon-trash @click.stop="trash(r)" variant="danger" ></b-icon-trash>
        </b-button>
      </span>

    </div>
  </b-list-group-item>
</b-list-group>

<!-- {{resources}} -->
</b-container>
</template>

<script>
export default {
  name: "Navigator",
  props: ['storage'],
  components: {
    'Share': () => import('@/components/tools/Share'),
  },
  data(){
    return{
      resources: [],
      current: null
    }
  },
  created(){
    this.init()
  },
  methods:{
    async pathChange(p){
      console.log(p)
      this.current = p
      //  this.resources = []
      if (p.type == "folder"){
        this.resources = await this.$getResources(p.url)
        console.log(this.resources)
      }else{
        await this.$getResource(p)
      }
    },
    async up(){
      console.log(this.current)
      let url = this.current.url
      if(url.endsWith('/')){
        url.substring(0, url.length - 1);
      }
      let url_s = url.split('/')
      console.log(url_s)
      let l = url_s.pop()
      console.log(l, url_s)
      if (l.length == 0){
        url_s.pop()
      }
      console.log(l,url_s)
      let u = url_s.join('/')
      this.current = {url: u}
      this.resources = await this.$getResources(u)
      // if(url.endsWith('/')){
      //   url.substring(0, url.length - 1);
      // }
      // console.log(url)
      // let parent = url.slice(0, url.lastIndexOf('/'))+'/';
      // console.log("parent",parent)
    },
    async init(){
      console.log(this.storage)
      this.current = this.storage
      this.resources = await this.$getResources(this.storage)
    },
    copy(r){
      console.log(r)
      navigator.clipboard.writeText(r.url);
      alert("Copied the url: " + r.url);
    },
    async addFolder(){
      console.log(this.current)
      var folder = prompt("Folder Name");
      if (folder != null && folder.length > 0) {
        console.log(folder)
        await this.$createFolder(this.current.url+folder.trim())
        this.resources = await this.$getResources(this.current.url)
      }
    },
    async addFile(){
      console.log(this.current)
      var name = prompt("HTML FILENAME");
      //name = name.trim()
      if (name != null && name.length > 0) {
        console.log(name)
        let filename = name.endsWith('.html') ? name : name+'.html'
        let url = this.current.url+filename
        let file = {name: name, url: url ,
          file: {type: 'text/html'},
          content: "<h1>"+filename+"</h1><small> <br> created : "+Date.now()+"</small><br> with <a href='https://scennaristeur.github.io/podit' target='_blank'>PodIt</a>"}
          let fileSaved = await this.$updateFile(file)
          console.log(fileSaved)
          this.resources = await this.$getResources(this.current.url)
        }
      },
      move(r){
        console.log('must move',r)
      },
      trash(r){
        console.log("must trash", r)
      }
    },
    watch:{
      async storage(){
        this.init()
      }
    }
  }
  </script>

  <style>

  </style>
