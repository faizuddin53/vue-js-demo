import { ref } from "vue";
const productList = ref([]);
const cartList = ref([]);

export function useProduct() {
  const addProduct = (product) => {
    productList.value.push(product);
  };
  const getProduct = () => {
    return productList.value;
  };

  const moveToCart = (item) => {
    cartList.value.push(item);
  };

  const getCart = () => {
    return cartList.value;
  };

  return { addProduct, getProduct, moveToCart, getCart };
}
