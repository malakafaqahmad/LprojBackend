import jwt from 'jsonwebtoken';

export const generateTokenlogin = (userId) => {
  
  return jwt.sign({ userId }, '50505', {
    expiresIn: '7d'
  });
};


export const verifyTokenlogin = (token) => {
  try {
    return jwt.verify(token, '50505');
  } catch (error) {
    return null;
  }  
};


export const generateTokenPayment = (userid, duration) =>{
  return jwt.sign({ userid }, '50505', {
    expiresIn: duration
  });
}

export const verifyTokenPayment = (token) => {
  try {
    return jwt.verify(token, '50505');
  }
  catch (error){
    return null;
  }
}