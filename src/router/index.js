import Vue from "vue";
import VueRouter from "vue-router";
import IndexPage from "../views/IndexPage.vue";
import UsersPage from "../views/UsersPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexPage,
  },
  {
    path: "/users",
    name: "users",
    component: UsersPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
