import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
  
  return jwt.sign({ userId }, '50505', {
    expiresIn: '7d'
  });
};


export const verifyToken = (token) => {
  try {
    return jwt.verify(token, '50505');
  } catch (error) {
    return null;
  }  
};