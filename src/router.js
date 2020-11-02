import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

export default createRouter({
    history: createWebHistory('/vue-todo/'),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos')
        }
    ]
});