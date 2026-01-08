import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserList from './components/UserList/userList.vue'
import AdminUser from './components/UserList/adminUser.vue'



const routes = [
  { path: '/userList', component: UserList },
  { path: '/admin', component: AdminUser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
