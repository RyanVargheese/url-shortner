import wrapAsync from "../utils/tryCatchWrapper.js"
import { registerUser } from "../services/auth.service.js";
import { cookieOptions } from "../config/config.js";

export const register_user =  wrapAsync( async (req, res) => {
  const {name,email,password}=req.body;
  const {token,user}= await registerUser(name,email,password);
  res.cookie("token",token,cookieOptions);
  res.status(200).json(user)

})

export const login_user =wrapAsync( async (req, res) => {
  const {email,password}=req.body;
  const {token,user}=await loginUser(email,password);
  res.cookie("token",token,cookieOptions);
  res.status(200).json(user);
})