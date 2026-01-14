<script setup>
import { onMounted , computed} from "vue";
import { useProduct } from "../composables/useProduct";
import { useRoute } from "vue-router";
const route = useRoute();
const productStore = useProduct();

const currentProduct = computed(() =>
  productStore.getProduct().find((item) => item.id === route.params.id)
);

</script>

<template> {{ currentProduct.description }}</template>
