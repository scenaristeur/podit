<template>
  <b-container>
    Nav : <b-button variant="primary" @click="init">{{storage}}</b-button>
    <b-button v-if="current != null" variant="primary" @click="up">up</b-button>
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

      <span style="display: table-cell; width: 75px;">
        <!-- <button class="btn btn-default" type="button"><span>ᐅ</span>  Go!</button> -->
        <!-- class="unstyled-button" -->

        <b-button size="sm" variant="outline-info"  @click.stop="copy(r)" style="float:left">
          <b-icon-clipboard @click.stop="copy(r)" variant="info" ></b-icon-clipboard>
        </b-button>
        <Share :item="r" style="float:left"/>
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
      let url_s = url.split('/')
      console.log(url_s)
      let l = url_s.pop()
      console.log(l, url_s)
      if (l.length == 0){
        url_s.pop()
      }
      console.log(url_s)
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
      this.current = null
      this.resources = await this.$getResources(this.storage)
    },
    copy(r){
      console.log(r)
      navigator.clipboard.writeText(r.url);

/* Alert the copied text */
alert("Copied the url: " + r.url);
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
