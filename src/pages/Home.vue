<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet. Id possimus dicta quo commodi maxime ut corporis aspernatur
          est sunt natus id quis consequuntur et blanditiis aperiam? Hic harum porro non veritatis
          eius in impedit aspernatur in dolore esse et minus quos eos distinctio error et sequi
          tenetur. Id similique exercitationem qui voluptate laudantium et eaque quas qui laborum
          amet 33 fuga repellat in rerum quidem. Et eius cupiditate eum deserunt officia eum dicta
          labore a molestiae dolor et autem voluptatem. Et accusamus dignissimos aut enim dolorem a
          incidunt aliquid sit optio sint vel facere officia quo labore incidunt. Eum aspernatur
          minus quo excepturi nisi est dolor fuga ea tempora voluptas qui sunt labore ut quos culpa
          aut molestiae totam.
        </p>
        <span ><router-link class="btn btn-dark " :to="{ name: 'users' }">Users Page</router-link></span>
        <span class="ms-2"><router-link class="btn btn-dark ml-2" :to="{ name: 'posts' }">Posts Page</router-link></span>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
