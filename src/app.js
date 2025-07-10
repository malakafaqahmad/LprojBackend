// app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import postLinkedInArticle from './tools/linkedinTools/simplePost.js';
import postLinkedIn from './tools/linkedinTools/linkPost.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);


app.get('/', (req, res) =>{
  postLinkedIn('first linkedin ghjkl;dfghjk post', 'urn:li:person:2DyPgn56tP');
  res.send('created post successfully');
})



export default app;
