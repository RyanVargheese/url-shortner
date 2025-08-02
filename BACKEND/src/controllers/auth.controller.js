import wrapAsync from "../utils/tryCatchWrapper.js"
import { loginUser,registerUser } from "../services/auth.service.js";
import { cookieOptions } from "../config/config.js";


//User can only be attached to the request only by registeruser and login user functions
export const register_user =  wrapAsync( async (req, res) => {
  const {name,email,password}=req.body;
  const {token,user}= await registerUser(name,email,password);
  req.user=user;
  res.cookie("accessToken",token,cookieOptions);
  res.status(200).json({user,message:"Sign-in SuccessFull"})

})

export const login_user =wrapAsync( async (req, res) => {
  const {email,password}=req.body;
  const {token,user}=await loginUser(email,password);
  req.user=user;
  res.cookie("accessToken",token,cookieOptions);
  res.status(200).json({user,message:"Login SuccessFull"});
})

export const logout_user=wrapAsync( async (req,res)=>{
  res.clearCookie("accessToken",cookieOptions);
  res.status(200).json({message:"logout success"});
})


export const get_current_user=wrapAsync( async (req,res)=>{
  return res.status(200).json({user:req.user});
})