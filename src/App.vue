<template>
  <div v-if="GStore.currentUser" id="nav">
    <nav class="navbar">
      <div class="row">
        <div class="columnn2">
          <router-link
            :to="{ name: 'ItemList' }"
            style="text-align: start; font-weight: bold"
          >
            <span>CoalIngot Auction</span></router-link
          >
        </div>
        <div class="columnn">
          <span style="font-weight: bold; margin-right: 2%">
            {{ GStore.currentUser.username }}</span
          >
          <button class="btn btn-logout-color" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
  <div class="page-layout">
    <router-view />
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  inject: ["GStore"],
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    currentUser() {
      return localStorage.getItem("user");
    },
  },
};
</script>

<style>
#inline {
  display: inline-block;
  margin-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navbar {
  padding: 10px;
  text-align: end;
  background-color: #ffa3a3;
}

.btn-logout-color {
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  border: 0;
  cursor: pointer;
}

.page-layout {
  padding: 0 50px 0 50px;
}

.row:after {
  margin: auto 0 auto 0;
  content: "";
  display: table;
  clear: both;
}

.columnn {
  margin: 0.4% 0 auto 0;
  float: left;
  width: 50%;
}
.columnn2 {
  margin: 0.7% 0 auto 0;
  float: left;
  width: 50%;
  text-align: start;
}

a {
  text-decoration: none;
  color: white;
}
</style>