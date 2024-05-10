const express=require('express');
const router=express.Router();
const zod=require('zod');
const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../config')
const {User}=require('../db');
const bcrypt = require('bcrypt');

const signUpBody=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    lastName:zod.string(),
    firstName:zod.string()
})

router.post("/signup",async(req,res)=>{
const {success}=signUpBody.safeParse(req.body);

if(!success){
    return res.status(411).json({
        message:"Email already exists or incorrect inputs"
    })
}

try{
const existingUser=await User.findOne({
    username:req.body.username
});

if(existingUser){
    return res.status(401).json({
        message:"Email already used or incorrect inputs"
    })
}

const hashedPassword = await bcrypt.hash(req.body.password, 10);


const user=await User.create({
    username:req.body.username,
    password:hashedPassword,
    firstName:req.body.firstName,
    lastName:req.body.lastName
})

const userId=user._id;

const token=jwt.sign({
    userId
},JWT_SECRET);

res.json({
    message:"User created successfully",
    token:token
});
} catch(err){
    res.status(500).json({
        message:"Error occured"
    })
}
});

router.post("/signin",async(req,res)=>{
    const signInBody=zod.object({
        username:zod.string().email(),
        password:zod.string()
    })

    const {data,error}=signInBody.safeParse(req.body);

    if(error){
        return res.status(411).json({
            message:"User doesnt exits or Inorrect inputs"
        })
    }

    try{
    const existingUser=User.findOne({
        username:data.username
    })

    if(!existingUser){
        return res.status(401).json({
            message:"User dosent exits or incorrect inputs"
        })
    }

    const passwordMatch=await bcrypt.compare(data.password,existingUser.password);
    if(!passwordMatch){
  res.status(401).json({
    message:"Password isnt correct!"
  })
    }
    const token=jwt.sign({
        userId:existingUser._id
    },JWT_SECRET)

    res.json({
        message:"User signed in Successfully",
        token:token
    })}
    catch(err){
        res.status(500).json({
          message:"error occured during signin"
        })
    }
})


module.exports=router