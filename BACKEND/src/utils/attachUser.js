import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = async (req, res, next) => {
  console.log(req.cookies); 
  const token = req.cookies.accessToken; 

  if (!token) return next(); 

  try {
    const decoded = verifyToken(token); // Function to verify and decode the JWT
    const user = await findUserById(decoded); // Function to find user in DB by ID from decoded token

    if (!user) return next();

    req.user = user; 
    next(); 
  } catch (error) {
    console.error("Authentication error:", error); // Log the error for debugging
    next(); 
  }
};