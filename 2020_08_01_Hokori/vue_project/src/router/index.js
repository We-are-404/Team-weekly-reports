import Vue from "vue";
import VueRouter from "vue-router";

import UserLayout from "../layouts/UserLayout.vue";
import MainLayout from "../layouts/MainLayout.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/user",
        name: "UserLayout",
        component: UserLayout,
        children: [{
                path: "login",
                name: "登录",
                component: () =>
                    import ("../components/LoginRegisterInput.vue"),
            },
            {
                path: "register",
                name: "注册",
                component: () =>
                    import ("../components/LoginRegisterInput.vue"),
            },
        ],
    },
    {
        path: "/",
        component: MainLayout,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        // import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
];

const router = new VueRouter({
    mode: "history", // 'hash'
    base: process.env.BASE_URL,
    routes,
});

export default router;