import Groq from "groq-sdk";
import config from "../../config/config.js";

const groq = new Groq({ apiKey: config.groqApiKey });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content;
}

export async function getGroqChatCompletion(model, content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: model,
  });
}
