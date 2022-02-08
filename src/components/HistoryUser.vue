<template>
    <div class="column">
      <div class="item-card">
         <p class="detail-text">Submit Price: {{ item.submitPrice  }}</p>
         <p class="detail-text">At {{ item.submitAt}}</p>
        <!-- <p class="detail-text">Current Price: {{ item.submitPrice }} THB</p> -->
      </div>
    </div>


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
  background-color: #f2f2f2;
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
  color: black;
  font-weight: bold;
  font-size: 12px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 14px;
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
