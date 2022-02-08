<template>
  <p class="detail-text">{{ Global_Store.item.itemName }}</p>
</template>

<script>
export default {
  name: "ItemCard",
  inject: ["Global_Store"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-card {
  width: 200px;
  cursor: pointer;
  margin-bottom: 15%;
  background-color: #888888;
  margin-left: auto;
  margin-right: auto;
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
  height: 125px;
}
.column {
  float: left;
  width: 20%;
}
</style>
