
const express=require('express');
const router=express.Router();
const zod=require('zod');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config')
const {User,Account}=require('../db');
const bcrypt = require('bcrypt');
const {authMiddleware}=require('../middleware')

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

/// ----- Create new account ------

await Account.create({
userId,
balance: 1 + Math.random() * 10000
})


const token=jwt.sign({
    userId
},JWT_SECRET);

res.json({
    message:"User created successfully",
    token:token
});
} catch(err){
    console.error("Error occurred during user creation:", err);
    res.status(500).json({
        message:"Error occured during user creation"
    })
}
});

const signInBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async(req,res)=>{
 
    const {data,error}=signInBody.safeParse(req.body);

    if(error){
        return res.status(411).json({
            message:"User doesnt exits or Inorrect inputs"
        })
    }

    try{
    const existingUser= await User.findOne({
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
        console.log(err);
        res.status(500).json({
          message:"error occured during signin"
        })
    }
})

const updateBody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

router.put('/',authMiddleware,async(req,res)=>{
    const{data,error}=updateBody.safeParse(req.body);

    if(error){
        res.status(411).json({
            message:"Invalid inputs"
        })
    }

try{

    const hashedPassword=data.password? await bcrypt.hash(data.password,10):undefined;

    const updateFields = {
        ...(hashedPassword && { password: hashedPassword }),
        ...(data.firstName && { firstName: data.firstName }),
        ...(data.lastName && { lastName: data.lastName })
    };

    await User.updateOne({ _id: req.userId }, updateFields);

    res.json({
        message: "Updated successfully"
    })
}catch(err){
    console.log(err);
    res.status(500).json({
        message:"Some error happened"
    })
}

});

router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || "";

    const users=await User.find({
        $or:[{
            firstName:{
            "$regex":filter
            }},{
          lastName:{
            "$regex":filter
            }
        }]
    });

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
           _id:user._id
        }))
    })
})

module.exports=router