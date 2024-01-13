import { sendRequest } from "../../helpers/request";

export const gardenDataSource = {
  getAllPlants: async () => {
    const response = await sendRequest({
      route: "garden",
    });

    return response;
  },
};
