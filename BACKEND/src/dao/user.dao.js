import User from "../models/user.model.js"

export const findUserByEmail=async (email)=>{
    return await User.findOne({email});
}

export const findUserByEmailAndPassword=async (email)=>{
    return await User.findOne({email}).select("+password");
}

export const findUserById=async (id)=>{
    const userDetails= await User.findOne({_id:id});
    return userDetails;
}

export const createUser=async(name,email,password)=>{
    const newUser=new User({name,email,password});
    await newUser.save();
    return newUser;
}