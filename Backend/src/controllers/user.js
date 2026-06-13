import { User } from "../models/User.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "node:crypto";

const register = async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message:"Please provide all fields"});
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        console.log(res);
        return res.status(httpStatus.CONFLICT).json({message:"User already exists"});
    }
    
    const user = await new User({username,email,password});
    await user.save();
    res.status(httpStatus.CREATED).json({message:"User registered successfully"})
}

const login = async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message:"Please provide all fields"});
    }

    const user = await User.findOne({email});
    if(!user) return res.status(httpStatus.NOT_FOUND).json({message:"User Not Found"});
    const userTrue = await bcrypt.compare(password,user.password);
 
    if(userTrue){
        user.token = crypto.randomBytes(20).toString("hex");
        await user.save();
        return res.status(httpStatus.OK).json({message:"User logged in",token:token});
    }else{
        return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid email or password"});
    }  

}
export {register,login};