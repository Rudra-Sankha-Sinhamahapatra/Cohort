import express from 'express'
import axios from 'axios'

const app=express();
const PORT=3000;

app.use(express.json());

const otpStore:Record<string,string>={};

app.post("/generate-otp",(req,res)=>{
    const email=req.body.email;
   if(!email){
     return res.status(400).json({message:"Email is required"});
   }

     const otp=Math.floor(100000+Math.random()*900000).toString();
     
     otpStore[email]=otp;

     console.log(`OTP FOR ${email}L ${otp}`);
     res.status(200).json({message:"OTP generated and logged in"})

});

app.post('/reset-password',(req,res)=>{
    const {email,otp,newPassword}=req.body;
    if(!email || !otp || !newPassword){
        return res.status(400).json({message:"Email,otp,password are required"});
    }
    if(otpStore[email]===otp){
        console.log(`Password for ${email} has been reset to : ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({message:"Password has been reset succesfully"});
    }
    else{
        res.status(401).json({message:"Invalid OTP"});
    }
});

app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
})
