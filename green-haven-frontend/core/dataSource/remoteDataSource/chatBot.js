import axios from "axios";
import { OPENAI_KEY } from "@env";

const conversationHistory = [];

export const getGeneratedMessage = async (data) => {
  try {
    console.log(data)
    conversationHistory.push({ role: "user", content: data });

    const response = await axios.post(
      "	https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );
    const botResponse = response.data.choices[0].message.content;
    conversationHistory.push({ role: "assistant", content: botResponse });

    return botResponse;
  } catch (error) {
    console.error(error);
  }
};
