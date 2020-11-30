import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
            title: 'DnDB - The Deno database'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory("/")
})

export default router;