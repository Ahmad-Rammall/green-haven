import { sendRequest } from "../../helpers/request";

export const geminiDataSource = {
  getResponse: async (data) => {
    const response = await sendRequest({
      body: data,
      route: "chat",
      method: "POST",
    });

    return response;
  },
};
