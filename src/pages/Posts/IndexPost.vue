<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div>
        <router-link class="btn btn-dark" :to="{ name: 'createPost' }">Create Post</router-link>
      </div>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <PostView :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import PostView from '../../components/user/PostView.vue'

export default {
  components: {
    PostView
  },

  setup() {
    const posts = ref([])
    const loading = ref(true)

    function getPost() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          // handle success
          posts.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(function () {
          // always executed
        })
    }
    getPost()

    return {
      posts,
      loading
    }
  }
}
</script>

<style></style>
