<template>
  <h1>Item List</h1>

  <div class="item-list">
    <ItemCard />
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
};
</script>

<style></style>
