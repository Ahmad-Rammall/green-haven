import { sendRequest } from "../request";

export const dashboardDataSource = {
  getCounts: async () => {
    const response = await sendRequest({
      route: "admin",
    });

    return response;
  },
};
