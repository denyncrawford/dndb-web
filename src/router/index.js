import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
            title: 'DnDB - The Deno database'
        },
    }, 
    {
        path: "/why",
        name: "Why",
        component: () => import( /* webpackChunkName: "why" */ '../views/Why.vue'),
        meta: {
            title: 'DnDB - About the project'
        }
    },
    {
        path: "/docs",
        name: "Docs",
        component: () => import( /* webpackChunkName: "docs" */ '../views/Docs.vue'),
        meta: {
            title: 'DnDB - Documentation'
        }
    },
    {
        path: "/monis",
        name: "Monis",
        component: () => import( /* webpackChunkName: "support" */ '../views/Docs.vue'),
        meta: {
            title: 'DnDB - Support Us'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory("/")
})

export default router;