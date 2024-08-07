import axios from "axios";
import { local } from "./localStorage";
import { API_HOST } from "@env";
import Toast from "react-native-simple-toast";

export const sendRequest = async ({
  route,
  body,
  method = "GET",
  contentType = "application/json",
}) => {
  const token = await local("token");
  // console.log(API_HOST);
  try {
    const response = await axios.request({
      url: `${process.env.API_HOST}/${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": contentType,
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    if (error.response?.data?.message)
      Toast.show(error.response.data.message, Toast.LONG);
    else Toast.show(error.message, Toast.LONG);
  }
};
