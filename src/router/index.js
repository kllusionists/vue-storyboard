import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Redirect',
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout/layout.vue'),
    redirect: '/storyboard/dashboard',
    children: [
      {
        path: 'storyboard/dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard' },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/storyboard/dashboard.vue')
      },
      {
        path: 'storyboard/creating',
        name: 'Storyboard',
        meta: { title: 'Creating' },
        component: () => import(/* webpackChunkName: "storyboard" */ '../views/storyboard/storyboard.vue')
      },
      {
        path: 'home',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login' },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/404',
    name: 'NotFund',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "404" */ '../views/40x/404.vue')
  }
]

const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

export default router
