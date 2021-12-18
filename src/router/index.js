import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/experiencia',
        name: 'Experiencia',
        component: () => import ('../views/Experiencia.vue')
    },
    {
        path: '/educacion',
        name: 'Educacion',
        component: () => import ('../views/Educacion.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import ('../views/Skills.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import ('../views/About.vue')
    }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router