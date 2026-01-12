<script setup>
import { useProduct } from '../composables/useProduct';
const productStore = useProduct();

</script>

<template>
  <h4>Cart List</h4>
  <div class="cartContainer">
    <div class="cart" v-for="cart in productStore.getProduct()" :key="cart.id">
      <p>{{ cart.name }}</p>
    </div>
  </div>
  <hr />
  <h4>Total selected Cart- {{}}</h4>
  <h4>Total Price - {{}}</h4>
</template>

<style scoped>
.cartContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cart {
  padding-left: 5px;
  background-color: bisque;
  width: 100%;
  height: 44px;
}
</style>
