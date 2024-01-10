import { sendRequest } from "../../helpers/request";

export const marketDataSource = {
  getAllProducts: async () => {
    const response = await sendRequest({
      route: "product",
    });

    return response;
  },

  getAllSellerProducts: async () => {
    const response = await sendRequest({
      route: "product/seller",
    });

    return response;
  },

  addProduct: async (data) => {
    const response = await sendRequest({
      route: "product",
      body: data,
      method: "POST",
      contentType: "multipart/form-data"
    });

    return response;
  },

  updateProduct: async (data) => {
    const response = await sendRequest({
      route: "product",
      body: data,
      method: "PUT",
      contentType: "multipart/form-data"
    });

    return response;
  },

  deleteProduct: async (data) => {
    const response = await sendRequest({
      route: `product/${data}`,
      method: "DELETE",
    });

    return response;
  },
};
