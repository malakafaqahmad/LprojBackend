import express from 'express';
import { Signin, Signup } from '../controllers/authController.js';

const router = express.Router();

// Public routes
router.post('/Signin', Signin);
router.post('/Signup', Signup);

export default router;
