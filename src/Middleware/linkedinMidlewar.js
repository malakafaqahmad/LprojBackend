import linkPost from '../tools/linkedinTools/simplePost.js';
import linkPostArticle from '../tools/linkedinTools/linkPost.js';


const linkedinMiddleware = async (req, res) => {

  if(!req.body.text){
    return res.status(400).json({ success: false, error: "Text is required" });
  }

  // Check the type of post and call the appropriate function
  if (req.body.type === 'post') {
    await linkPost(req.body.text);
  }
  else{
    await linkPostArticle(req.body.text, req.body.articleUrl, req.body.articleTitle, req.body.articleDescription);
  }

  res.json({ success: true, message: "LinkedIn post created successfully" });

  
}

export default linkedinMiddleware;