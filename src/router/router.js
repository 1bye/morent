import { createRouter, createWebHistory } from 'vue-router'
import Index from "./pages/Index.vue";
import Category from "./pages/Category.vue";
import Details from "./pages/details.vue";

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/category', component: Category, name: 'category' },
    { path: '/details', component: Details, name: 'details' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router