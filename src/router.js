import { createWebHashHistory ,createRouter} from "vue-router";

import Home from './components/views/Home.vue';
import About from './components/views/About.vue';
import Contact from './components/views/Contact.vue';
import test from './components/users/test.vue';

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/About',
        name:'About',
        component:About
    },
    {
        path:'/Contact',
        name:'Contact',
        component:Contact
    },
    {
        path:"/test",
        name:'test',
        component:test
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass:'has-text-success'
});

export default router;