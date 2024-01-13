import { sendRequest } from "../../helpers/request";

export const postDataSource = {
  getPosts: async () => {
    const response = await sendRequest({
      route: "post",
    });
    return response;
  },

  likePost: async (data) => {
    const response = await sendRequest({
      route:"post/like",
      method: "PUT",
      body: data,
    });
    return response;
  },

  getUserPosts: async (data) => {
    const response = await sendRequest({
      route: `post/${data}`
    })

    return response;
  }
};
