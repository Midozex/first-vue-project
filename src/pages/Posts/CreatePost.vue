<template>
  <div class="container mt-5">
    <div class="col-md-6">
      <h2 class="mb-5">Create Post :</h2>
      <PostForm @formData="createPost" :button-loading="loading" button-text="Create post" />
    </div>
  </div>
</template>

<script>
import PostForm from '../../components/posts/Form.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'

export default {
  components: {
    PostForm
  },

  setup() {
    const loading = ref(false)

    function createPost(formData) {
      loading.value = true
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: formData.title,
          body: formData.body,
          userId: 1
        })
        .then(function (response) {
          loading.value = false

          Swal.fire({
            title: 'Thanks!',
            text: 'Post Created',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(function () {
          // always executed
        })
    }

    return { createPost, loading }
  }
}
</script>

<style></style>
