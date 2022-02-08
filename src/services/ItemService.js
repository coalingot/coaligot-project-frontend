import apiClient from "../services/AxiosClient.js";

export default {
  getAllItems() {
    return apiClient.get("/items");
  },
  postItem(obj) {
    return apiClient.post("/items", {
      itemName: obj.itemName,
      itemDescription: obj.itemDescription,
      endDate: obj.endDate,
      startPrice: obj.startPrice,
      imageurl: obj.imageurl,
    });
  }
 
  /*     uploadFile(file) {
            let formData = new FormData()
            formData.append('file', file)
            return apiClient.post('/uploadFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } */
};
