import { generateToken } from '../authentication/jwt/generateToken.js';

export const Signup = (req, res) => {
  console.log("Signup request received");
  res.send("Still in Progress, will be done soon!");
};



export const Signin = (req, res) => {
  console.log("Signin request received");
  const { username, password } = req.body;

  if (username === "u2022672@giki.edu.pk" && password === "pass") {
    const token = generateToken(username);
    res.status(200).json({ message: "Signin was successful!", token });  
  } else {
    res.status(401).json({ message: "Invalid credentials try again"});
  }
};

