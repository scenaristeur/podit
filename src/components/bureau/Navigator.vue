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
      {{r.name}}
    </b-list-group-item>
  </b-list-group>
  <!-- {{resources}} -->
</b-container>
</template>

<script>
export default {
  name: "Navigator",
  props: ['storage'],
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
        this.$store.commit('bureau/setResource',p)
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
