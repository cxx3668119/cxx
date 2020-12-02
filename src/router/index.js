import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Experience from '../views/Experience.vue'
import Development from '../views/Development.vue'
import Forum from '../views/Forum.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/index',
  children: [{
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
    },
    {
      path: '/development',
      name: 'development',
      component: Development,
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum,
    },
  ]
}]
const router = new VueRouter({
  routes
})

export default router