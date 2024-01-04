import axios from "axios";
import { local } from "./localStorage";

export const sendRequest = async ({
  route,
  body,
  method = "GET",
}) => {
  const token = await local("token")

  try {
    const response = await axios.request({
      url: `http://192.168.0.11:8000/${route}`,
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
