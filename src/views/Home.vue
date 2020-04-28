<template>
  <div class="home">
    home
    <nav-header/>
    <router-view/>
    <nav-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style scoped>
</style>
