import { sendRequest } from "../request";

export const postsDataSource = {
  getAllPosts: async () => {
    const response = await sendRequest({
      route: "admin/posts",
    });
    return response;
  },
};
