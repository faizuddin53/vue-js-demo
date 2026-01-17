import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// ✅ Font Awesome CSS (ALL icons)
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartList from "./components/product/CartList.vue";
import ProductLandingPage from "./components/product/ProductLandingPage.vue";
import AddProduct from "./components/product/AddProduct.vue";
import ProductDetails from "./components/product/ProductDetails.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes = [
  { path: "/", component: ProductLandingPage },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
  { path: "/addproduct", component: AddProduct },
  { path: "/productDetails/:id", component: ProductDetails },
  { path: "/cart", component: CartList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
