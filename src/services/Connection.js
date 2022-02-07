import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
//    method(id_panient,(json = id doctor,topic,recommend))

export default {
  Userlogin(user) {
    return apiClient.post("/auth/" + user);
  },
};
