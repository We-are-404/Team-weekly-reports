import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "CommonLayout",
        component: () =>
            import ("layouts/CommonLayout.vue"),
        children: [{
                path: "/",
                name: "OpenStage",
                component: () =>
                    import ("views/Open.vue"),
            },
            {
                path: "todolist",
                name: "ToDoList",
                component: () =>
                    import ("views/ToDoList.vue"),
            },
        ],
    },
    {
        path: "/login",
        component: () =>
            import ("layouts/LoginLayout.vue"),
        children: [{
            path: "/",
            name: "Login",
            component: () =>
                import ("views/Login.vue")
        }, ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;