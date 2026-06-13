import express from "express";
import 'dotenv/config';
import path from 'path';
import status from "http-status";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from 'http';
import { connectToSocket } from "./controllers/socketManager.js";
import userRouter from "./routes/user.js";
import { triggerToast } from "../../Frontend/public/js/script.js";
const app = express();

const server = createServer(app);
const io = connectToSocket(server);

app.use(express.json({"limit":"40kb"}));
app.use(express.urlencoded({"limit":"40kb",extended:true}))
app.set("port",(process.env.PORT || 3000));
app.use(cors());


app.use('/static', express.static(path.join(import.meta.dirname, '../../Frontend/public')));

main()
    .then(console.log("connection successfull"))
    .catch((err)=>console.log(err));

async function main(){
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MONGO");

    server.listen(app.get("port"),()=>{
        console.log("listening to port",3000);
    })
}

app.use("/api/v1/users",userRouter);

app.use((err,req,res,next)=>{
    let {statusCode=500 , message="Something went wrong"}= err;
    triggerToast(true,message);
    res.status(statusCode).json({message});
})
