<template>
  <router-link
    class="event-link"
    :to="{ name: 'Itemdetail', params: { id: item.auctionItem.itemId } }"
  >
  <div class="column">
    <div class="item-card">
      <p class="detail-text">{{ item.auctionItem.itemName }}</p>
      <img :src="item.auctionItem.itemImage" />
      <p class="detail-text">Current Price: {{ item.highestPrice }} THB</p>
    </div>
  </div>

  </router-link>
</template>

<script>
export default {
  name: "ItemCard",
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
  padding: 10px;
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
