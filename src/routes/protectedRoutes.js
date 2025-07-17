// routes/protectedRoutes.js
import express from 'express';
import { verifyUser } from '../Middleware/authMiddleware.js';
import { getUserInfo } from '../controllers/userInfo.js';
import geminiMiddleware from '../Middleware/linkedin/geminiMiddleware.js';
import groqMiddleware from '../Middleware/linkedin/groqMiddleware.js';
import linkedinMiddleware from '../Middleware/linkedin/linkedinMidlewar.js';


const router = express.Router();

router.use(verifyUser);

router.get('/lu/info', getUserInfo);
router.post('/lu/groq', groqMiddleware);
router.post('/lu/gemini', geminiMiddleware);
router.post('/lu/post', linkedinMiddleware);
router.post('/lu/postArticle', linkedinMiddleware);





export default router;
