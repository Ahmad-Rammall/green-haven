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
      route: "post/like",
      method: "PUT",
      body: data,
    });
    return response;
  },

  getUserPosts: async (data) => {
    const response = await sendRequest({
      route: `post/${data}`,
    });

    return response;
  },

  createPost: async (data) => {
    const response = await sendRequest({
      route: "post",
      body: data,
      method: "POST",
      contentType: "multipart/form-data",
    });

    return response;
  },

  handleLikeComment: async (data) => {
    const response = await sendRequest({
      route: "post/comment/like",
      body: data,
      method: "PUT",
    });

    return response;
  },
};
