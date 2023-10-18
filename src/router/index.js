import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '/src/components/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
