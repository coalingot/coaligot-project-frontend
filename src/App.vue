<template>
  <div v-if="GStore.currentUser" id="nav">
    <nav class="navbar">
      <h4>{{ GStore.currentUser.username }}</h4>

      <button class="btn btn-logout-color" @click="logout">Logout</button>
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
    isUser() {
      return AuthService.hasRoles("ROLE_USER");
    },
  },
  mounted() {
    if (!this.GStore.currentUser) {
      this.$router.push({ name: "Login" });
    } else if (this.isUser) {
      this.$router.push({
        name: "ItemList",
      });
    }
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
</style>
