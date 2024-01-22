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
  updateUser: async (data) => {
    const response = await sendRequest({
      route: "admin/users",
      method:"PUT",
      body: data
    });
    return response
  },
  deleteUser: async (userId) => {
    const response = await sendRequest({
      route: `admin/users/${userId}`,
      method:"DELETE",
    });
    return response
  },
};
