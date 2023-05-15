import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    // À compléter
    {
      path: '/',
      name : 'Quizs',
      component : () => import('../components/Quizs.vue'),
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