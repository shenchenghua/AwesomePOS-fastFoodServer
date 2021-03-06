import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '@/components/pag/pos.vue'
import Shouyin from '@/components/pag/shouyin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/Shouyin',
    component: Shouyin
  },
  // {
  //   path: '/shouyin',
  //   name: 'Shouyin',
  // },
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
