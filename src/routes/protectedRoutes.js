// routes/protectedRoutes.js
import express from 'express';
import { verifyUser } from '../Middleware/authMiddleware.js';
import { getUserInfo } from '../controllers/userInfo.js';

const router = express.Router();

router.use(verifyUser);

router.get('/userinfo', getUserInfo);

export default router;
