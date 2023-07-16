<script>
import Header from './components/sections/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style></style>
