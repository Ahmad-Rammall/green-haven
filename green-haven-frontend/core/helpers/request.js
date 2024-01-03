import axios from "axios";

export const sendRequest = async ({
  route,
  body,
  method = "GET",
}) => {

  try {
    const response = await axios.request({
      url: `http://localhost:8000/${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
