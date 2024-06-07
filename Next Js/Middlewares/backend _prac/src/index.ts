import express from "express"
import { countMiddleware } from "./middlewares/countMiddleware";
import {request } from "./middlewares/countMiddleware"
import { authMiddleware } from "./middlewares/authMiddleware";
import { type } from "./types/types";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./secrets/secret";

const app=express();
app.use(express.json());


app.use(countMiddleware);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/requestCount",(req,res)=>{
res.json({
    request:request()
})
})

app.get("/home",authMiddleware,({req,res}:type)=>{
res.send("You are logged in")
})


app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    try{
    const token=jwt.sign(username,JWT_SECRET);
    console.log(`token ${token}`);
    res.json({
        token:token
    })
    }catch(e){
        console.log(e);
        res.json({
            message:"Error during signin"
        })
    }
})
app.listen(3000);