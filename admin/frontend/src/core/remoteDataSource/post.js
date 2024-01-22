import { sendRequest } from "../request";

export const postsDataSource = {
  getAllPosts: async () => {
    const response = await sendRequest({
      route: "admin/posts",
    });
    return response;
  },

  deletePost: async (postId) => {
    const response = await sendRequest({
      route: `admin/${postId}`,
      method: "DELETE",
    });
    return response;
  }
};
