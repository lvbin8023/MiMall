<template>
  <div>
    order
    <order-header/>
    <router-view/>
    <order-footer/>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'

export default {
  name: 'order',
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>

<style scoped>

</style>
