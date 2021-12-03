<template>
  <b-container class="hello">
    <h1>{{ msg }}</h1>
    <p>
      With Podit you can create a Website in only a few minutes.<br>
      All data is stored on your <a href="https://solidproject.org/" target="_blank">Solid Pod</a>

      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <h3>Login to your pod</h3>
    <ul>
      <li>
        Connect to your pod or create one if you don't already have one. All listed providers gives you a free pod.
      </li>
    </ul>
    <!-- <ul>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
  </ul>
-->
<h3>Create a folder for your website</h3>
<ul>
  <li>Once connected, click on  the blue button mentionning your pod under "My pod". </li>
  <li>navigate inside the "public" folder.</li>
  <li>create a new folder with a name like "website" with the <b-icon-folder-plus variant="info" ></b-icon-folder-plus> button</li>
  <li>navigate inside the "website" folder.</li>
  <li>create a new file with a name like "index" with the <b-icon-file-plus variant="info" ></b-icon-file-plus> button.
  The '.html' extension is automagically added to your filename.</li>
  <li>
    Then select your 'index.html' file. The "Editor" should appear. Click inside the editor and update your index.html file.
    As soon as your mouse leave the "Editor", your file is update on your POD.
  </li>


</ul>
<!--  <ul>
<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
</ul>
<h3>Ecosystem</h3>
<ul>
<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
</ul> -->
</b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/* ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
