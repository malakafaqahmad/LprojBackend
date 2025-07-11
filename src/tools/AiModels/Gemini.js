import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../config/config.js";

const ai = new GoogleGenerativeAI(config.geminiApiKey);

const prompt = "Generate a short post based on the following content for a LinkedIn post:";

export async function generateGeminiContent(content) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-1.5-pro" if needed

    const result = await model.generateContent([
      { role: "user", parts: [{ text: `${prompt} ${content}` }] }
    ]);

    const response = await result.response;
    const text = await response.text();

    return text;
  } catch (error) {
    console.error("Error generating Gemini content:", error);
    return "Failed to generate content.";
  }
}
