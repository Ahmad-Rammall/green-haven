import { sendRequest } from "../../helpers/request";

export const orderDataSource = {

  getAllSellerOrders: async () => {
    const response = await sendRequest({
      route: "order",
    });

    return response;
  },

  deleteOrder: async (data) => {
    const response = await sendRequest({
      route: "order",
      method: "DELETE",
      body: data
    });

    return response;
  },

};
