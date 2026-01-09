import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserList from './components/UserList/userList.vue'
import AdminUser from './components/UserList/adminUser.vue'
// ✅ Font Awesome CSS (ALL icons)
import '@fortawesome/fontawesome-free/css/all.min.css'


const routes = [
  { path: '/userList', component: UserList },
  { path: '/admin', component: AdminUser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
