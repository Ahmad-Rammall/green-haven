import axios from "axios";
import { local } from "./localStorage";
import { API_HOST } from "@env"

export const sendRequest = async ({
  route,
  body,
  method = "GET",
}) => {
  const token = await local("token")

  try {
    const response = await axios.request({
      url: `${API_HOST}/${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
