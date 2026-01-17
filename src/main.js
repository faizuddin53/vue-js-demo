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
import Login from "./components/auth/Login.vue";
import SignUp from "./components/auth/SignUp.vue";

const routes = [
  { path: "/", component: ProductLandingPage },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
  {path :'/login', name:"login", component : Login},
  {path :'/signup', name:"signUp", component : SignUp},
  { path: "/addproduct", name: "addProduct", component: AddProduct },
  {
    path: "/productDetails/:id",
    name: "productDetails",
    component: ProductDetails,
  },
  { path: "/cart", name: "cart", component: CartList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
