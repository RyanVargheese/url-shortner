import jwt from "jsonwebtoken";
import { nanoid } from "nanoid"


export const generateNanoId=(num)=>{
    return nanoid(num);
}

export const signInToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});
}

export const verifyToken=(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET)
}