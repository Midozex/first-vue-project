<template>
  <div class="container mt-5">
    <div class="col-md-6">
      <h2 class="mb-5">Create Post :</h2>
      <form @submit.prevent="validate">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title :</label>
          <input type="text" class="form-control" v-model.lazy="form.title" />
          <div class="form-text text-danger">
            {{ form.titleErrorText }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Body :</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            v-model.lazy="form.body"
          ></textarea>
          <div class="form-text text-danger">
            {{ form.bodyErrorText }}
          </div>
        </div>
        <button type="submit" class="btn btn-dark" :disabled="loading">
          <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Create Post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  setup() {
    const form = reactive({
      title: '',
      titleErrorText: '',
      body: '',
      bodyErrorText: ''
    })
    const loading = ref(false)

    function validate() {
      if (form.title === '') {
        form.titleErrorText = 'Title is required'
      } else {
        form.titleErrorText = ''
      }
      if (form.body === '') {
        form.bodyErrorText = 'Body is required'
      } else {
        form.bodyErrorText = ''
      }
      if (form.title !== '' && form.body !== '') {
        loading.value = true
        createPost()
      }
    }

    function createPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: form.title,
          body: form.body,
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

    return { form, validate, loading }
  }
}
</script>

<style></style>
