import dotenv from 'dotenv';
dotenv.config(); 

export const config = {
  accessToken: process.env.LINKEDIN_CLIENT_SECRET,
  port: process.env.PORT,
  userInfoUrl: process.env.USERINFOURL,
  postUrl: process.env.POSTURL,
  jwtToken: process.env.JWT_SECRET,
  geminiApiKey: process.env.GEMINI_API_KEY,
  mongodbUri: process.env.MONGODBURI,
  groqApiKey: process.env.GROQAPIKEY
};

export default config;