import { sendRequest } from "../request";

export const userDataSource = {
  getAllUsers: async () => {
    const response = await sendRequest({
      route: "admin/users",
    });
    return response
  },
};
