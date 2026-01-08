<script setup>
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import ProductLandingPage from "./components/product/ProductLandingPage.vue";

</script>

<template>
  <!-- Header -->
  <Header />
  <!-- ProductList -->
   <ProductLandingPage/>
   <RouterView />
</template>

<style scoped>
</style>
