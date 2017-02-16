<template>
<div>
    <ul>
        <li v-for="post in posts">
            <router-link :to="'post/' + post.title">{{ post.title }}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
import postService from '../router/post-service'

    export default {
        name: 'drawPost',
        data(){
            return {

                posts: postService.getPosts()
            }
        }
    }
</script>

<style> 

</style>