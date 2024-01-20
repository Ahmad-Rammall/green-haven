import axios from "axios";

export const sendRequest = async ({ method = "GET", body, route }) => {
  try {
    const response = await axios.request({
      url: `${process.env.API_HOST}/${route}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    return response
  } catch (error) {
    return error
  }
};
