import { getGroqChatCompletion } from '../tools/AiModels/chatGroq.js';


const groqMiddleware = async (req, res,) => {
  const { model, content } = req.body;

  if (!model || !content) {
    return res.status(400).json({ message: "Model and content are required" });

  }

  try{
    const chatCompletion = await getGroqChatCompletion(model, content);
    res.json({success: true, chatCompletion});
  }
  catch (error){
    res.status(500).json({success: false, error: "Error processing request"});
  }
    

};

export default groqMiddleware;