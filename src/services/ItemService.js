import apiClient from "../services/AxiosClient.js";

export default {
  getAllItems() {
    return apiClient.get("/items");
  },
  postItem(item) {
    console.log(item.itemImage)
    let double = parseFloat(item.startPrice)
    return apiClient.post("/items", {
      itemName: item.itemName,
      itemDescription: item.itemDescription,
      endDate: item.endDate,

      startPrice: double,

      itemImage: item.itemImage,
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
