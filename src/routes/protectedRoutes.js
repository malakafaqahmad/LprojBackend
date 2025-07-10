// routes/protectedRoutes.js
import express from 'express';
import { verifyUser } from '../Middleware/authMiddleware.js';
import { getUserInfo } from '../controllers/userInfo.js';
import { generateGeminiContent } from '../tools/AiModels/Gemini.js';
import postLinkedIn from '../tools/linkedinTools/simplePost.js';
import postLinkedInArticle from '../tools/linkedinTools/linkPost.js';
import groqMiddleware from '../Middleware/groqMiddleware.js';


const router = express.Router();

router.use(verifyUser);

router.get('/lu/info', getUserInfo);
router.post('/lu/groq', groqMiddleware);
router.post('/lu/gemini', generateGeminiContent);
router.post('/lu/post', postLinkedIn);
router.post('/lu/postArticle', postLinkedInArticle);





export default router;
