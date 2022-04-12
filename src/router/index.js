import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Solution from '@/views/Solution.vue'
import About from '@/views/About.vue'
import Join from '@/views/Join.vue'
import Insight from '@/views/Insight.vue'
import Work from '@/views/Work.vue'


Vue.use(VueRouter)

const routes = [

   {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Solution',
    component: Solution
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
   {
    path: '/work',
    name: 'Work',
    component: Work
   },

  
    {
    path: '/insight',
    name: 'Insight',
    component: Insight
   },

    {
    path: '/join',
    name: 'Join',
    component: Join
   }

   
   
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
