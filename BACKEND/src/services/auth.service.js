import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { createUser, findUserByEmail } from '../dao/user.dao.js';
import { signInToken } from '../utils/helper.js';

export const registerUser =async (name,email,password)=>{
    const user=await findUserByEmail(email);
    if(user)
        throw new ConflictError("User already exists");
    const newUser=await createUser();
    const token=await signInToken({id: newUser._id});
    return {token,user};

}

export const loginUser=async(email,password)=>{
    const user=await findUserByEmail(email);

    if(!user || user.password == password)
        throw new Error("Invalid Email Or Password");

    const token=signInToken({id:user._id});
    return {token,user};
}