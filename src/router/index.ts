import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SourcesView from '../views/SourcesView.vue'
import StartView from '../views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sources',
      name: 'sources',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SourcesView
    },
    {
      path: '/start',
      name: 'start',
      component: StartView,
      // only show this view if being accessed from the home view
      beforeEnter: (to, from, next) => {
        if (from.name === 'home') {
          next()
        } else {
          next({ name: 'home' })
        }
      },
    },
  ]
})

export default router
