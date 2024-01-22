import { sendRequest } from "../request";

export const productsDataSource = {
  getAllProducts: async () => {
    const response = await sendRequest({
      route: "product",
    });

    return response;
  },

  deleteProduct: async (productId) => {
    const response = await sendRequest({
      route: `admin/product/${productId}`,
      method: "DELETE",
    });
    return response;
  }
};
