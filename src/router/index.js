import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";
import AddItems from "@/views/AddItems.vue";
import Login from "../views/LoginForm.vue";
import Register from "../views/RegisterForm.vue";
import Itemdetail from "../views/Itemdetail.vue";
import ItemService from "../services/ItemService.js";
import Global_Store from "@/store";
const routes = [
  {
    path: "/itemdetail/:id",
    name: "Itemdetail",
    component: Itemdetail,
    props: true,
    beforeEnter: (to) => {
      return ItemService
        .getItem(to.params.id)
        .then((response) => {
          Global_Store.item = response.data;
          console.log( Global_Store.item )
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404",
            };
          } else {
            return {
              name: "network_error",
            };
          }
        });
    },
  },
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
  {
    path: "/additems",
    name: "AddItems",
    component: AddItems,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
