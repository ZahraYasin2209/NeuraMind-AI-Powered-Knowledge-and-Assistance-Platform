/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API Key:", apiKey); // Check if it's loading correctly

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = await result.response.text(); // Await this call

    console.log("API Response:", response);
    return response;
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    return "Error fetching data. Please try again.";
  }
}

export default run;
