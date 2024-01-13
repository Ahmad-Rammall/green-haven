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

  updatePassword: async (data) => {
    const response = await sendRequest({
      body: data,
      route: "profile/password",
      method: "PUT",
    });
    return response
  },

  handleFollowUser: async (data) => {
    const response = await sendRequest({
      body: data,
      route: "profile/followOrUnfollow",
      method: "PUT"
    })

    return response
  }
};
