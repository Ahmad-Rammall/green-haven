import { sendRequest } from "../request";

export const userDataSource = {
  getAllUsers: async () => {
    const response = await sendRequest({
      route: "admin/users",
    });
    return response
  },
  addUser: async (data) => {
    const response = await sendRequest({
      route: "admin/users",
      method:"POST",
      body: data
    });
    return response
  },
};
