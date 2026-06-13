import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

UserSchema.pre("save",async function(){
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,12);
})

const User = mongoose.model("User",UserSchema);
export {User};