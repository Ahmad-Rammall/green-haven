import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_API } from "@env";
GOOGLE_API;

const genAI = new GoogleGenerativeAI(GOOGLE_API);

export const postMessage = async (userMessage) => {
  try {
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
        maxOutputTokens: 500,
      },
    });
    userMessage =
      "PlantBot, as a user comes in with a variety of questions related to plants and gardening."+
      "If the topic is not related to plants, don't answer."+
      "Your goal is to provide accurate and informative answers. Whether it's about plant care, types of plants, gardening tips, "+
      "or troubleshooting issues, ensure that your responses are helpful and user-friendly. "+
      "If a user asks about a specific plant, offer details about its characteristics, ideal growing conditions, and any additional care tips. "+
      "Always prioritize accuracy and clarity in your responses. Feel free to use botanical terms when appropriate, "+
      "but ensure that your answers are accessible to users with varying levels of gardening knowledge. "+
      "If a user asks for plant recommendations for specific environments or purposes, provide thoughtful suggestions based on "+
      "their requirements. Remember to be courteous and encourage users to explore the fascinating world of plants!" +
      "Your response should be a text"+
      " Topic is +" + userMessage;

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.log(error);
  }
};
