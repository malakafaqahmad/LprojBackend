import { GoogleGenAI } from "@google/genai";
import config from "../../config/config.js";

const ai = new GoogleGenAI({
  apiKey: config.geminiApiKey
});

const prompt = "Generate a short post based on the following content for a LinkedIn post:";

export async function generateGeminiContent(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: `${prompt} ${content}` }]
      }
    ]
  });

  return response.response.text();
}
