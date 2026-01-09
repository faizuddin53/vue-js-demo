import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserList from './components/UserList/userList.vue'
import AdminUser from './components/UserList/adminUser.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(faUser, faCoffee, faGithub)


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

// ✅ register font awesome component
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
