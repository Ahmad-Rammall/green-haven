import { sendRequest } from "../request";

export const productsDataSource = {
  getAllProducts: async () => {
    const response = await sendRequest({
      route: "product",
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
