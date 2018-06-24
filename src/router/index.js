import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'

import Home from '../components/view/Home'
import Order from '../components/view/Order'
import Product from '../components/view/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/Order',
          component: Order
        },
        {
          path: '/Product',
          component: Product
        }
      ]
    }
  ]
})
