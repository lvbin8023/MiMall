<template>
  <div></div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      userInfo: ''
    }
  },
  mounted () {
    this.axios.get('/user/login').then(res => {
      this.userInfo = res
    })
  }
}
</script>

<style scoped>

</style>
