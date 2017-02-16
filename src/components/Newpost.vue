<template>
    <div>
        <h1>Create New Post</h1><br>
        <router-link :to="{name: 'home'}">Home</router-link>

        <form @submit.prevent="addPost">
            <input type="text" v-model="postTitle" placeholder="Title"><br><br>
            <textarea rows="10" cols="100" v-model="postBody" placeholder="Body of post"></textarea><br>
            <button>Add Post</button>

        </form>


    </div>
</template>

<script>
import postService from '../router/post-service'

    export default {
        name: 'newpost',
        data() {
            return {
                postTitle: '',
                postBody: ''
            }
        },
        methods: {
            addPost(){
                postService.addPost(this.postTitle, this.postBody)
            }
        }

    }

</script>

<style>

</style>