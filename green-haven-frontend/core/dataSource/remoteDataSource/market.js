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
};
