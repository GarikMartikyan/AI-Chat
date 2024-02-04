import {GoogleGenerativeAI} from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");

async function run() {
  console.log("start...");
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "Hello, I have 2 dogs in my house.",
      },
      {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg = "what is your name";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  console.log("end");
}

run();
