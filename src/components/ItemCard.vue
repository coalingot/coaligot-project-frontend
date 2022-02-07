<template>
  <!-- <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  > -->
  <div class="item-card">
    <p class="detail-text">Item A</p>
    <img src="../assets/KFC.jpg" />
    <p class="detail-text">Now Price: 555 THB</p>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: "ItemCard",
};
</script>

<style scoped>
.item-card {
  width: 200px;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #888888;
}

.item-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #00000033;
}

.item-link {
  color: #2c3e50;
  text-decoration: none;
}

.detail-text {
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 5px;
}

img {
  width: 200px;
  height: auto;
}
</style>
