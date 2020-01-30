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

const Portfolio = resolve => {
    require.ensure(
        ["@/views/Portfolio/Portfolio.vue"],
        () => {
            resolve(require("@/views/Portfolio/Portfolio.vue"));
        },
        "portfolio"
    );
};

const Trade = resolve => {
    require.ensure(
        ["@/views/Trade/Trade.vue"],
        () => {
            resolve(require("@/views/Trade/Trade.vue"));
        },
        "trading"
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

export default new VueRouter({
    mode: "history",
    routes
});