const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const googleAPI = process.env.GOOGLE_API;
const genAI = new GoogleGenerativeAI(googleAPI);

const postMessage = async (req, res) => {
  try {
    const userMessage = req.body.message;
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
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ message: text });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  postMessage,
};
