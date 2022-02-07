<template>
  <h1>Item List</h1>

  <div class="row">
    <ItemCard :item="item" v-for="item in items" :key="item.id" />
  </div>

  <div class="footer">
    <router-link to="#">
      <button class="btn btn-add-color">Add item</button>
    </router-link>
  </div>
</template>

<script>
import ItemService from "../services/ItemService.js";
import ItemCard from "../components/ItemCard.vue";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: null,
    };
  },
  created() {
    ItemService.getAllItems()
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.btn-add-color {
  background-color: #2075f3;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 25px;
  border: 0;
  cursor: pointer;
}

.row:after {
  content: "";
  display: table;
  clear: both;
  text-align: center;
}
</style>