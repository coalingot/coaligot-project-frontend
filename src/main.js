import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).provide("Global_Store", store).use(router).mount("#app");
