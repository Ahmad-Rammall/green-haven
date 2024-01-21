import { sendRequest } from "../../helpers/request";

export const userDataSource = {
  getAllUsers: async () => {
    const response = await sendRequest({
      route: "users",
    });
    return response
  },
};
