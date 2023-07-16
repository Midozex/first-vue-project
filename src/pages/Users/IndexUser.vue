<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3" v-for="user in users" :key="user.id">
        <UserView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import UserView from '../../components/user/UserView.vue'

export default {
  components: {
    UserView
  },

  setup() {
    const users = ref([])
    const loading = ref(true)

    function getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          users.value = response.data
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
    getUsers()

    return {
      users,
      loading
    }
  }
}
</script>

<style></style>
