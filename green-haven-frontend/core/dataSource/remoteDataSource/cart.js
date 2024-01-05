import { sendRequest } from "../../helpers/request";

export const cartDataSource = {
  addProductToCart: async (data) => {
    try{
      const response = await sendRequest({
        route: "cart",
        method: "POST",
        body: data
      });
  
      return response;
    }
    catch(error){
      return "Product Already Exists !"
    }
  },
  getAllCartProducts: async () => {
    const response = await sendRequest({
      route: "cart",
    });

    return response;
  },
  deleteCartProduct: async (data) => {
    const response = await sendRequest({
      route: "cart",
      method: "DELETE",
      body: data
    });

    return response;
  },
};
