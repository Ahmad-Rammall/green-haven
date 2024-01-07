import axios from "axios";
import { PLANT_API_KEY } from "@env";

const apiUrl = "https://plant.id/api/v3/identification";

const headers = {
  "Api-Key": PLANT_API_KEY,
  "Content-Type": "application/json",
};

export const postImage = async (data) => {
  const requestData = {
    images: [data],
  };

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    return response;
  } catch (error) {
    console.error(
      "Error",
      error.response ? error.response.data : error.message
    );
  }
};

export const getImageDescription = async (access_token) => {

    const getUrl = `https://plant.id/api/v3/identification/${access_token}?details=description`
  
    try {
      const response = await axios.post(getUrl, { headers });
      return response;
    } catch (error) {
      console.error(
        "Error",
        error.response ? error.response.data : error.message
      );
    }
  };
