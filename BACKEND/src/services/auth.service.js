import { createUser, findUserByEmail, findUserByEmailAndPassword} from '../dao/user.dao.js';
import { signInToken } from '../utils/helper.js';
import { ConflictError } from '../utils/errorHandler.js';

//This function creates a new User using Dao function and sends a signInToken as well and sends it back
export const registerUser =async (name,email,password)=>{
    const user=await findUserByEmail(email);
    if(user)
        throw new ConflictError("User already exists");
    const newUser=await createUser(name,email,password);
    const token=await signInToken({id: newUser._id});
    return {token,user};

}

export const loginUser = async (email, password) => {
    const user = await findUserByEmailAndPassword(email)
    if(!user) throw new Error("Invalid email or password")
    
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) throw new Error("Invalid email or password")
    const token = signInToken({id: user._id})
    return {token,user}
}