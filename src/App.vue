<template>
  <div id="nav">
    <nav class="navbar">
      <router-link to="/login">
        <button class="btn btn-logout-color">Logout</button>
      </router-link>
    </nav>
  </div>

  <!-- new element -->
  <div class="page-layout">
    <router-view />
  </div>
</template>

<script>
/* export default {
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push({ name: "Login" });
    },
  },
}; */
</script>

<style>
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
