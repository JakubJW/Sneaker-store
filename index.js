import Vue from 'vue'
import VueRouter from 'vue-router'
import AllView from '../views/AllView.vue'
import SaleView from '../views/SaleView.vue'
import LifestyleView from '../views/LifestyleView.vue'
import RunningView from '../views/RunningView.vue'
import BasketballView from '../views/BasketballView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all',
    name: 'AllView',
    component: AllView
  },
  {
    path: '/sale',
    name: 'SaleView',
    component: SaleView
  },
  {
    path: '/lifestyle',
    name: 'LifestyleView',
    component: LifestyleView
  },
  {
    path: '/running',
    name: 'RunningView',
    component: RunningView
  },
  {
    path: '/basketball',
    name: 'BasketballView',
    component: BasketballView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
