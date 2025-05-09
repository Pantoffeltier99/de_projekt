import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        redirect: '/home' // home link, damit direkt man auf die home page kommt
    },
    {  
        path: '/home',
        component: () => import('./components/Home.vue') // home page
    },
    {
        path: '/about',
        component: () => import('./components/About.vue') // about page
    },
    {
        path: '/contact',
        component: () => import('./components/Contact.vue')  // contact page
    },
  ]
})

createApp(App).use(router).mount('#app')
