<template>
  <br />
  <div class="container-fluid">
    <div class="item-card">
      <Form @submit="handlesubmit" :validation-schema="schema">
        <div class="form-group" id="text">
          <h2><label for="submitPrice">Price:</label></h2>
          <Field name="submitPrice" type="number" class="form-control" />
          <br />
          <ErrorMessage name="submitPrice" class="error-feedback" />
        </div>
        <div class="form-group" id="Button">
          <button class="btn btn-block btn-lg btn-color">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Submit</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
      <!-- <p>Current Price: {{ GStore.item.price }} THB</p> -->
    </div>
  </div>
  <br />
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import ItemService from "../services/ItemService.js";
import * as yup from "yup";
export default {
  inject: ["GStore"],
  name: "SubmitPrice",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      submitPrice: yup.number(),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handlesubmit(input) {
      console.log(input.submitPrice);
      ItemService.submitPrice(
        input.submitPrice,
        this.GStore.currentUser.id,
        this.item.auctionId
      )
        .then(() => {
          this.$router.push({ name: "ItemList" });
        })
        .catch(() => {
          this.message = "could not submit";
        });
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
