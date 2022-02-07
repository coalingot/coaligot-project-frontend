<template>
  <div id="nav">
    <nav class="navbar">
      <button class="btn btn-block btn-lg btn-color">
        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
        <span>Logout</span>
      </button>
    </nav>
  </div>

  <!-- new element -->
  <div class="page-layout">
    <router-view />
  </div>
</template>

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

.btn-color {
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  border: 0;
}

.page-layout {
  padding: 0 50px 0 50px;
}
</style>
