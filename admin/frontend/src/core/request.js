import axios from "axios";

export const sendRequest = async ({ method = "GET", body, route }) => {
  const apiHost = import.meta.env.VITE_REACT_APP_API_HOST
  
  try {
    const response = await axios.request({
      url: `${apiHost}/${route}`,
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
