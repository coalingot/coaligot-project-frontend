import apiClient from "../services/AxiosClient.js";

export default {
  getAllItems() {
    return apiClient.get("/see-all-auction");
  },
  getItem(id) {
    return apiClient.get("/items/" + id);
  },
  postItem(item) {
    console.log(item.itemImage);
    console.log(item);
    let double = parseFloat(item.price).toFixed(2);
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
