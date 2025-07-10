import express from 'express';
import { Signin, Signup } from '../controllers/authController.js';

const router = express.Router();

// Public routes
router.post('/Signin', Signin);
router.get('/Signup', Signup);

export default router;
