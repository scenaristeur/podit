<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Login /><br>
    <Browser />
    <HelloWorld msg="Welcome to Podit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'Login': () => import('@/components/Login'),
    'Browser': () => import('@/components/Browser'),
  }
}
</script>
