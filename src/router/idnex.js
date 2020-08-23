import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/CommentApp.vue'
import Async from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Change',
    component: () => import('../views/Change.vue'),
  },
  {
    path: '/comment',
    name: 'Home',
    component: Home,
  },
  {
    path: '/async',
    name: 'Async',
    component: Async,
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('../views/Suspense.vue'),
  },
  {
    path: '/sync',
    name: 'Sync',
    component: () => import('../views/Sync.vue'),
  },
  {
    path: '/book/:id',
    name: 'Router',
    component: () => import('../components/Book.vue'),
    // props: true,
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('../views/TreeComp.vue'),
    // props: true,
  },
  {
    path: '/keepalive',
    name: 'KeepAlive',
    component: () => import('../views/KeepComp.vue'),
    children: [
      {
        name: 'aa',
        path: 'aa',
        component: () => import('../components/A.vue'),
      },
      {
        name: 'bb',
        path: 'bb',
        component: () => import('../components/B.vue'),
      },
    ],
    // props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]
const router = createRouter({
  // createWebHashHistory
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
