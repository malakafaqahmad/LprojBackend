import express from 'express';
import { Signin, Signup } from '../controllers/authController.js';

const router = express.Router();

router.post('/Signin', Signin);
router.post('/Signup', Signup);

export default router;
