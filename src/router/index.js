import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    // À compléter
    {
      path: '/',
      name : 'quiz-view',
      component : () => import('../components/QuizView.vue'),
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