<script setup>
import products from "../../data/product";
import { ref } from "vue";
const cartList = ref([]);
const addToCard = (cartItem) => {
  cartList.value.push(cartItem);
};
</script>

<template>
  <div class="ProductContainer">
    <div class="product" v-for="item in products" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.category }}</p>
      <button @click="addToCard(item)">Add To Cart</button>
    </div>
  </div>
  <h4>Cart List</h4>
  <div class="cartContainer">
    <div class="cart" v-for="cart in cartList" :key="cart.id">
      <p>{{ cart.name }}</p>
    </div>
  </div>
  <hr />
  <h4>Total selected Cart- {{}}</h4>
  <h4>Total Price - {{}}</h4>
</template>
<style scoped>
.ProductContainer {
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  height: 450px;
  background-color: aliceblue;
  margin-left: 6px;
  margin-right: 6px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
}
.ProductContainer .product {
  border-radius: 5px;
  background-color: #d9d9d9;
  width: 140px;
  height: 166px;
  text-align: center;
}

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
