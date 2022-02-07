<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="row register-form">
            <div class="col-md">
              <img
                id="profile-img"
                src="https://image.freepik.com/free-vector/coffee-cake-design-element-cute-vector-set_53876-136839.jpg?w=740"
                class="profile-img-card"
              />
              <Form @submit="handleLogin" :validation-schema="schema">
                <div class="form-group" id="text">
                  <h2><label for="username">Username</label></h2>
                  <Field name="username" type="text" class="form-control" />
                  <br />
                  <ErrorMessage name="username" class="error-feedback" />
                </div>
                <div class="form-group" id="text">
                  <h2><label for="password">Password</label></h2>
                  <Field name="password" type="password" class="form-control" />
                  <br />
                  <ErrorMessage name="password" class="error-feedback" />
                </div>
                <br />
                <br />
                <div class="form-group" id="Button">
                  <!-- <button>
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span>Login</span>
                  </button> -->

                  <button class="btn btn-block btn-lg btn-color">
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span>Login</span>
                  </button>
                </div>

                <div class="form-group">
                  <div v-if="message" class="alert alert-danger" role="alert">
                    {{ message }}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
// import api from "@/services/Connection.js";
import AuthService from "@/services/AuthService.js";
import Global_Store from "@/store";
import * as yup from "yup";
export default {
  inject: [Global_Store],

  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
      biguser: null,
    };
  },
  methods: {
    handleLogin(user) {
      AuthService.login(user)
        .then(() => {
          console.log("i love u");
          // this.$router.go()
          this.$router.push({ name: "ItemList" });
        })
        .catch(() => {
          this.message = "could not login";
        });
    },
  },
};
</script>

<style scoped>
/* #text {
  padding: 0px 100px 0px 100px;
} */
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
