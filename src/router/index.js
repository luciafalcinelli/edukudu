import { createRouter, createWebHistory } from 'vue-router'
import ParentComponent from '../components/ParentComponent.vue';
import HTMLandLESSCompiler from '../components/HTMLandLESSCompiler.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'task',
      component: ParentComponent
    },
    {
      path: '/task1',
      name: 'task1',
      component: ParentComponent
    },
    {
      path: '/task2',
      name: 'task2',
      component: HTMLandLESSCompiler
    }
  ]
})

export default router
