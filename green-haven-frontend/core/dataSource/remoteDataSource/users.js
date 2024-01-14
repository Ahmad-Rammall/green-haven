import { sendRequest } from "../../helpers/request";

export const usersDataSource = {
  getAllUsers: async () => {
    const response = await sendRequest({
      route: "users",
    });
    return response
  },
};
