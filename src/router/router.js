/**
 * Initialize Routes
 * Lazy Loading Optimizes Performance
 * Asynchronous I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.
 */

import VueRouter from 'vue-router';




const routes = [
];

/*
const Portfolio = () => import('@/views/Portfolio/Portfolio.vue');
const Dashboard = () => import('@/views/Dashboard/Dashboard.vue');
const Trade = () => import('@/views/Trade/Trade.vue');
 */

/*
const routes = [
    {
        path: "/",
        name: "dashboard",
        components: {
            header: Navbar,
            content: Dashboard
        }
    },
    {
        path: "/portfolio",
        name: "portfolio",
        components: {
            header: Navbar,
            content: Portfolio
        }
    },
    {
        path: "/trade",
        name: "trade",
        components: {
            header: Navbar,
            content: Trade
        }
    },
    {
        path: "*",
        redirect: {
            path: "/",
            name: "dashboard",
            components: {
                header: Navbar,
                content: Dashboard
            }
        }
    }
]
 */

export default new VueRouter({
    mode: "history",
    routes
});
