<template>
    <div>
        <router-link :to="{name: 'home'}">Home</router-link>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
import postService from '../router/post-service'

    export default {
        name: 'post',
        // data(){
        //     return {
                
        //         post: postService.getPost(this.$route.params.postTitle)
        //     }
        // },
        computed: {
            post(){
                return postService.getPost(this.$route.params.postTitle)
            }
        }
    }
</script>

<style> 

</style>