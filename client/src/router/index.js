import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BugDetails from '../views/BugDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/bugDetails',
    name: 'bugDetails',
    component: function () {
      return import(/* webpackChunkName: "bugDetails" */ '../views/BugDetails.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
