import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Newpost from '../components/NewPost'
import Post from '../components/Post'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
       path: '/create',
      name: 'create',
      component: Newpost
    },{
      path: '/post/:postTitle',
      name: 'post',
      component: Post
    }
  ]
})
