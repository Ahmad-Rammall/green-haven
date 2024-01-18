import axios from "axios";
import { OPENAI_KEY } from "@env";

export const getGeneratedMessage = async (data) => {
  try {
    const response = await axios.post(
      "	https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Act as a plant enthusiast, respond briefly to this discussion : ${data}`,
          },
        ],
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
