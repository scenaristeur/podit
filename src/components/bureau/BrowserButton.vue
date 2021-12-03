<template>
  <!-- <div > -->

    <!-- name : {{btn.name}}<br>
    storage : {{btn.storage}}<br><br>
 -->

    <b-button
    v-if="btn != null"
    size="sm"
    variant="primary"
    @click="bureauChanged(btn)">
    {{btn.name}}
    </b-button>


    <!-- {{btn}} -->
    <!-- <hr>
    <hr> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'BrowserButton',
  props: ['item'],
  data(){
    return{
      btn : null
    }
  },
  async created(){
    if(this.item.storage == undefined && this.item.webId != undefined){
      console.log("get", this.item)
      let p = await this.$getPodInfos(this.item)
      console.log(p)
      this.btn = p
    }else {
      this.btn = this.item
    }
  },
  methods: {
    // async podInfo(w){
    //   let friend_pod = {webId: w}
    //   return await this.$getPodInfos(friend_pod)
    // },
    async bureauChanged(b){
      console.log(typeof b, b)
      this.$store.commit('bureau/setBureau',b)
    //   let bureau = {}
    //   if (typeof b == "string"){
    //     if (b == this.pod.storage){
    //       bureau.name = "My Storage"
    //       bureau.storage = b
    //     }else{
    //       console.log("get friend storage", b)
    //       let friend_pod = {webId: b}
    //       bureau = await this.$getPodInfos(friend_pod)
    //       //console.log(friend_pod)
    //     }
    //   }else{
    //     bureau = b
    //   }
    //   console.log(bureau)
    //   this.$store.commit('bureau/setBureau',bureau)
     }
  },
}
</script>

<style>

</style>
