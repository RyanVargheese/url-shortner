import { findUserById } from "../dao/user.dao";
import { verifyToken } from "../utils/helper";

const authMiddleware=(res,req,res)=>{
    const token=req.cookies.accessToken;

    if(!token)
        throw new Error("UnAuthorized");

    try {
        const decoded=verifyToken(token);
        const user=findUserById(decoded);

        if(!user)
            throw new Error("UnAuthorized");

        req.user=user;
        next();
    } catch (error) {
        res.status(401).json({message:"UnAuthorized"});
    }
    
}