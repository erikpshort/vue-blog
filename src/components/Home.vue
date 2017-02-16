<template>
  <div class="home">
<h1>{{msg}}</h1>
<router-link :to="{name: 'create'}">Create</router-link>
<DrawPost></DrawPost>
  </div>
</template>

<script>
import Newpost from './Newpost'
import DrawPost from './DrawPost'


export default {
  name: 'home',
  components: { Newpost, DrawPost },
  data () {
    return {
      msg: "Welcome to Rui's and Erik's Blog Poster"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
