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
        component: () => import('../components/Experiencia.vue')


    },
    // {
    //     path: '/educacion',
    //     name: 'Educacion',
    //     component: () => import('../components/Educacion.vue')
    // },
    // {
    //     path: '/skills',
    //     name: 'Skills',
    //     component: () => import('../components/Skills.vue')
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../components/About.vue')
    // }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router