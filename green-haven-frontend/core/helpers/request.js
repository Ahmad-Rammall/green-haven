import axios from "axios";
import { local } from "./localStorage";
import { API_HOST } from "@env"
import Toast from 'react-native-simple-toast';

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
    Toast.show("Product Already Exists In Your Cart !", Toast.LONG);
  }
};
