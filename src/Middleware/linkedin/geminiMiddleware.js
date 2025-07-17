import { generateGeminiContent } from '../../tools/AiModels/Gemini.js';
import config from '../../config/config.js';

const geminiMiddleware = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    console.log(content);
    console.log("the gemini api key is ", config.geminiApiKey);
    const geminiResponse = await generateGeminiContent(content);
    res.json({ success: true, geminiResponse });
  }
  catch (error) {
    res.status(500).json({ success: false, error: "Error processing request" });
  }

}

export default geminiMiddleware;