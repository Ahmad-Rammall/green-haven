import { sendRequest } from "../../helpers/request";

export const postDataSource = {
  getPosts: async () => {
    const response = await sendRequest({
      route: "post",
    });
    return response;
  },
};
