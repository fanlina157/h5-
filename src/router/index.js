import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
