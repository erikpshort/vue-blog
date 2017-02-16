let posts = {
    "Rui-Post": {
        title: 'Rui-Post',
        body: 'hasdf;lkaskl;asdkl;lkj'
    },
    "Hello": {
        title: "Hello",
        body: "There"
    }
}

let postService = {
    getPosts() {
        return posts
    },
    getPost(postName) {
        return posts[postName]
    },
    addPost(postName, body) {
        posts[postName] = { title: postName, body: body }
        console.log(posts)
    }
}

export default postService