<template>
  <div>
    <order-header/>
    cart
    <order-footer/>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'

export default {
  name: 'cart',
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>

<style scoped>

</style>
