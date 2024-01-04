import { sendRequest } from "../../helpers/request";

export const cartDataSource = {
  addProductToCart: async (data) => {
    const response = await sendRequest({
      route: "cart",
      method: "POST",
      body: data
    });

    return response;
  },
  getAllCartProducts: async () => {
    const response = await sendRequest({
      route: "cart",
    });

    return response;
  },
};
