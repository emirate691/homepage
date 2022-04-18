import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Solution from '@/views/Solution.vue'
import About from '@/views/About.vue'
import Join from '@/views/Join.vue'
import Insight from '@/views/Insight.vue'
import Work from '@/views/Work.vue'
import Talk from '@/views/Talk.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/solution',
    name: 'solution',
    component: Solution,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/work',
    name: 'work',
    component: Work
  },

  {
    path: '/insight',
    name: 'insight',
    component: Insight
  },

  {
    path: '/join',
    name: 'join',
    component: Join
  },

  {
    path: '/talk',
    name: 'talk',
    component: Talk
  }

   
   
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
