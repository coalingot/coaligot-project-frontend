import apiClient from "../services/AxiosClient.js";

export default {
  getAllItems() {
    return apiClient.get("/items");
  },
  postItem(item) {
    return apiClient.post("/items", {
      itemName: item.itemName,
      itemDescription: item.itemDescription,
      endDate: item.endDate,
      startPrice: item.startPrice,
      imageurl: item.imageurl,
    });
  },

  uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);
    return apiClient.post("/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
