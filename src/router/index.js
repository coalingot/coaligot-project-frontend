import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";
import Login from "../views/LoginForm.vue";
import Register from "../views/RegisterForm.vue";

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
