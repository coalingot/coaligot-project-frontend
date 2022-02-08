<template>
  
    <div class="column">
      <div class="item-card">
        <p class="detail-text">User: {{ item.auctionUser.username  }}</p>
         <p class="detail-text">Price: {{ item.submitPrice  }}</p>
        <!-- <p class="detail-text">Current Price: {{ item.submitPrice }} THB</p> -->
      </div>
    </div>
    <br>


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
h1{
  color: rgba(255, 255, 255, 0.966);
}
.item-card {
  width: 100%;
  cursor: pointer;
  background-color: #df8181ee;
  margin-left: auto;
  margin-right: auto;
}

.item-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #00000033;
}

.item-link {
  color: #e9a1a1;
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

.column {
  padding-left: 25%;
  max-width: 50%;
}
</style>
