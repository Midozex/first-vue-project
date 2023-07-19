<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-6">
        <div class="card">
          <div class="card-header">
            <li class="list-group-item">{{ post.title }}</li>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ post.body }}</li>
          </ul>
          <div class="card-footer">
            <button @click="deletePost" class="btn btn-small btn-danger me-4">Delete</button>
            <router-link
              :to="{ name: 'editPost', params: { id: post.id } }"
              class="btn btn-small btn-dark"
              >Edit</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import PostView from '../../components/user/PostView.vue'
import { useRoute } from 'vue-router'
import EditPost from './EditPost.vue'
import Swal from 'sweetalert2'

export default {
  components: {
    PostView
  },

  setup() {
    const post = ref({})
    const loading = ref(true)
    const route = useRoute()
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data
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

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          // handle success
          Swal.fire({
            title: 'Thanks!',
            text: 'Post Deleted',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(function () {
          // always executed
        })
    }

    return {
      post,
      loading,
      route,
      deletePost
    }
  }
}
</script>

<style></style>
