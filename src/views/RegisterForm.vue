<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="register-form">
            <div class="col-md">
              <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <br />
                        <br />
                        <Field
                          name="username"
                          type="text"
                          class="form-control"
                        />
                        <br />
                        <br />
                        <ErrorMessage name="username" class="error-feedback" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="password">Password</label>
                        <br />
                        <br />
                        <Field
                          name="password"
                          type="password"
                          class="form-control"
                        />
                        <br />
                        <br />
                        <ErrorMessage name="password" class="error-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstname">Firstname</label>
                        <br />
                        <br />
                        <Field
                          name="firstname"
                          type="text"
                          class="form-control"
                        />
                        <br />
                        <br />
                        <ErrorMessage name="firstname" class="error-feedback" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastname">Lastname</label>
                        <br />
                        <br />
                        <Field
                          name="lastname"
                          type="text"
                          class="form-control"
                        />
                        <br />
                        <br />
                        <ErrorMessage name="lastname" class="error-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group" id="text">
                    <label for="email">Email</label>
                    <br />
                    <br />
                    <Field name="email" type="email" class="form-control" />
                    <br />
                    <br />
                    <ErrorMessage name="email" class="error-feedback" />
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
// eslint-disable-next-line
import AuthService from "@/services/AuthService.js";
//import api from "@/services/Connection.js";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  inject: ["Global_Store"],
  // eslint-disable-next-line
  data() {
    const schema = yup.object().shape({
      firstname: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      lastname: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      imageurl: yup.string(),
    });
    return {
      schema,
    };
  },
  methods: {
    // eslint-disable-next-line
       handleRegister(user) {
      // console.log(user)
      AuthService.saveUser(user)
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(() => {
          this.$router.push("NetworkError");
        });
    },
    handleImages(files) {
      this.files = files;
    },
  },
};
</script>

<style scoped>
#text {
  padding: 0px 100px 0px 100px;
}
#text2 {
  padding: 50px;
}
.register {
  background: url("https://images.unsplash.com/photo-1518821703881-9da5a9f42038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  height: 100vh;
  background-size: cover;
  display: flex;
  align-content: center;
  justify-content: center;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", sans-serif;
  box-sizing: border-box;
}

.register-right {
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-content {
  width: 600px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}

.register-form {
  background: #f3a4a4;
  padding: 60px 40px;
}

.col-md-6 {
  padding: 10px;
}

.error-feedback {
  color: red;
}
</style>
