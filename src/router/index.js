import { createRouter, createWebHashHistory } from 'vue-router'
import Quizs from '../components/Quizs.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'Quizs',
      component : Quizs
    },
    {
        path: '/About',
        name : 'about',
        component :() => import('../components/About.vue'),
    },
    {
        path: '/quiz/:id',
        name : 'quiz',
        component : () => import('../components/Quiz.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router