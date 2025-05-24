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
        path: '/ueber-uns',
        component: () => import('./components/About.vue') // about page
    },
    {
        path: '/kontakt',
        component: () => import('./components/Contact.vue')  // contact page
    },
    {
      path: '/termine',
      component: () => import('./components/Events.vue') // events page
    },
    {
      path: '/gruppen',
      component: () => import('./components/Groups.vue') // groups page 
    },
    {
      path: '/packliste',
      component: () => import('./components/Plist.vue') // packing list page
    },
  ]
})

createApp(App).use(router).mount('#app')
