import { GoogleGenerativeAI } from "@google/generative-ai"
import {GOOGLE_API} from "@env"
GOOGLE_API

const genAI = new GoogleGenerativeAI(GOOGLE_API);

export const postMessage = async (userMessage) => {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: userMessage,
        },
        {
          role: "model",
          parts: "Great to meet you. What would you like to know?",
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();
    return text
  } catch (error) {
    console.log(error)
  }
};