<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3">
        <div class="card">
          <div class="card-header">
            <li class="list-group-item">{{ user.name }}</li>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email : {{ user.email }}</li>
            <li class="list-group-item">Phone : {{ user.phone }}</li>
            <li class="list-group-item">Website : {{ user.website }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import UserView from '../../components/user/UserView.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    UserView
  },

  setup() {
    const user = ref({})
    const loading = ref(true)
    const route = useRoute()
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data
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
      user,
      loading
    }
  }
}
</script>

<style></style>
