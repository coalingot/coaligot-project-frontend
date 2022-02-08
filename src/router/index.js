import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";
import AddItems from "@/views/AddItems.vue";
import Login from "../views/LoginForm.vue";
import Register from "../views/RegisterForm.vue";
import Itemdetail from "../views/Itemdetail.vue";
import ItemService from "../services/ItemService.js";
import Global_Store from "@/store";
import AuthService from "../services/AuthService.js";
import UserProfile from "../views/UserProfile.vue"
const routes = [
  {
    path: "/itemdetail/:id",
    name: "Itemdetail",
    component: Itemdetail,
    props: true,
    beforeEnter: (to) => {

      if (localStorage.getItem("user") == null) {
        return { name: "Login" };
      } else {
        return ItemService
          .getItem(to.params.id)
          .then((response) => {
            Global_Store.item = response.data;
            console.log(Global_Store.item)
          })
      }
    }

  },
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
    beforeEnter: () => {
      if (localStorage.getItem("user") == null) {
        return { name: "Login" };
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: () => {
      if (AuthService.hasRoles("ROLE_USER")) {
        return { name: "ItemList" };
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: () => {
      if (AuthService.hasRoles("ROLE_USER")) {
        return { name: "ItemList" };
      }
    },
  },
  {
    path: "/userprofile/:id",
    name:"UserProfile",
    component: UserProfile,
    props: true,
    beforeEnter: (to) => {

      if (localStorage.getItem("user") == null) {
        return { name: "Login" };
      } else {
        return ItemService
          .getUserProfile(to.params.id)
          .then((response) => {
            Global_Store.user = response.data;
            console.log(Global_Store.user)
          })
      }
    }
  },
  {
    path: "/additems",
    name: "AddItems",
    component: AddItems,
    beforeEnter: () => {
      if (localStorage.getItem("user") == null) {
        return { name: "Login" };
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
