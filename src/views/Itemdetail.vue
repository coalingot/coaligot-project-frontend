<template>
  <br />
  <br />
  <div class="container-fluid">
    <div class="item-card">
      <!-- {{GStore.item}} -->
      <div class="row">
        <div class="col-12">
          <img :src="GStore.item.itemImage" />
          <br />
        </div>
      </div>
      <h1>
        Name: <span id="front">{{ GStore.item.itemName }}</span>
      </h1>
      <div class="card">
        <h2>
          ITEMDESCRIPTION:
          <span id="front">{{ GStore.item.itemDescription }}</span>
        </h2>
      </div>
      <!-- <p>Current Price: {{ GStore.item.price }} THB</p> -->
    </div>
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  name: "Itemdetail",
};
</script>

<style scoped>
.col-12 {
  padding: 1%;
}
#front {
  font: 0.8em sans-serif;
  color: rgb(255, 238, 238);
}
img {
  max-width: 100%;
  size: 500px;
  border: solid 3px rgba(241, 230, 230, 0.51);
}
.container-fluid {
  background-image: url("../assets/loginsweetdount.jpg");
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
}
.item-card {
  width: 50%;
  cursor: pointer;
  height: 100%;
  padding: 7%;
  background-color: #f3a4a4;
  border: solid 3px rgba(241, 230, 230, 0.51);
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
