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
            <button class="btn btn-small btn-danger me-4">Delete</button>
            <button class="btn btn-small btn-dark">Edit</button>
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

export default {
  components: {
    PostView
  },

  setup() {
    const post = ref({})
    const loading = ref(true)
    const route = useRoute()
    function getUser() {
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
    getUser()

    return {
      post,
      loading
    }
  }
}
</script>

<style></style>
