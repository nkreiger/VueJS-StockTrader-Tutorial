/**
 * Initialize Routes
 * Lazy Loading to Optomize Performance
 */

import VueRouter from 'vue-router';

const Navbar = resolve => {
    require.ensure(
        ["@/views/Navbar/Navbar.vue"],
        () => {
            resolve(require("@/views/Navbar/Navbar.vue"));
        },
        "nav"
    );
};

const Dashboard = resolve => {
    require.ensure(
        ["@/views/Dashboard/Dashboard.vue"],
        () => {
            resolve(require("@/views/Dashboard/Dashboard.vue"));
        },
        "landing"
    );
};

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

export default new VueRouter({
    mode: "history",
    routes
});