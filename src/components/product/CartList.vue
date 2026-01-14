<script setup>
import { computed } from 'vue';
import { useProduct } from '../composables/useProduct';
const productStore = useProduct();

const totalPrice = computed(() => {
   return productStore.getCart().reduce((acc, item) => {
        acc = acc+ Number(item.price)
        return acc
   }, 0)
})
const totalCartItems = computed(() => productStore.getCart().length)
</script>

<template>
  <h4>Cart List</h4>
  <div class="cartContainer">
    <div class="cart" v-for="cart in productStore.getCart()" :key="cart.id">
      <p>{{ cart.name }}</p>
      <p>{{ cart.price }}</p>
    </div>
  </div>
  <hr />
  <h4>Total selected Cart- {{totalCartItems}}</h4>
  <h4>Total Price - {{totalPrice}}</h4>
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
  height: 100px;
}
</style>
