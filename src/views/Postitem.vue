<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="row register-form">
            <div class="col-md">
              <Form @submit="handleItem" :validation-schema="schema">
                <div v-if="!successful">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="itemName">ItemName</label>
                        <Field
                          name="itemName"
                          type="text"
                          class="form-control"
                        />
                        <ErrorMessage name="itemName" class="error-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="itemDescription">itemDescription</label>
                        <Field
                          name="itemDescription"
                          type="text"
                          class="form-control"
                        />
                        <ErrorMessage
                          name="itemDescription"
                          class="error-feedback"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="startPrice">startPrice</label>
                        <Field
                          name="startPrice"
                          type="double"
                          class="form-control"
                        />
                        <ErrorMessage
                          name="startPrice"
                          class="error-feedback"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="Enddate">Enddate</label>
                        <Field
                          name="Enddate"
                          type="date"
                          class="form-control"
                        />
                        <ErrorMessage name="Enddate" class="error-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="itemImage">Image</label>
                    <UploadImages
                      @changed="handleImages"
                      id="image"
                      name="itemImage"
                      :max="1"
                    />
                  </div>
                  <br />
                  <div class="form-group" id="Button">
                    <button
                      type="submit"
                      class="btn btn-outline-info btn-block"
                      :disabled="loading"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      Sign Up
                    </button>
                  </div>
                </div>
              </Form>

              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
import ItemService from "../services/ItemService.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import UploadImages from "vue-upload-drop-images";
// eslint-disable-next-line
// import AuthService from "@/services/AuthService.js";

export default {
  name: "PostItem",
  components: {
    UploadImages,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      itemName: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      itemDescription: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      endDate: yup.string(),
      startPrice: yup.string(),
      itemImage: yup.string(),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      files: [],
      itemImage: ""
    };
  },
  methods: {
    // eslint-disable-next-line

    handleItem(item) {
      Promise.all(
        this.files.map((file) => {
          console.log(file);
          return ItemService.uploadFile(file);
        })
      ).then((response) => {
        item.itemImage = response.map((r) => r.data);
        item.itemImage = item.itemImage[0];
        console.log(item.itemImage);
        ItemService.postItem(item)
          .then(() => {
            this.message = "";
            this.successful = true;
            this.loading = true;
            // this.$router.push("/login");
          })
          .catch(() => {
            this.message ="connect fail"
          });
      });
    },
     handleImages(files) {
      this.files = files;
    },
  },
};
</script>

<style>
#image {
  display: block;
}
#Button {
  padding-right: 10%;
  padding-left: 10%;
}
.form-control {
  padding: 1%;
  padding-right: 5%;
  padding-left: 5%;
}
.register {
  background-size: cover;
  background-image: url("../assets/loginsweetdount.jpg");
  padding: 5%;
  margin-top: 3%;
}

.register .register-form {
  padding: 7%;
  color: rgba(253, 253, 253, 0.598);
  background-color: #f3a4a4;
  border-radius: 10%;
}

label {
  display: block;
  margin-top: 10px;
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.error-feedback {
  color: rgb(230, 57, 80);
}
</style>
