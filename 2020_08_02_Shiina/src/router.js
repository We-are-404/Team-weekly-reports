import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('./layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                // redirect: '/signin',
                component: () => import('./views/main/Index.vue')
            },
            {
                path:'find',
                component: () => import('./views/main/Find.vue')
            }
        ]
    },
    {
        path: '/signin',
        component: () => import ('./views/Signin.vue')
    },
    {
        path: '*',
        component: () => import('./views/NotFound.vue')
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router