import { sendRequest } from "../../helpers/request";

export const profileDataSource = {
  updateProfile: async (data) => {
    const response = await sendRequest({
      body: data,
      route: "profile",
      method: "PUT",
      contentType: "multipart/form-data"
    });
    return response
  },
};
