import express from 'express'
import axios from 'axios'
import { rateLimit } from 'express-rate-limit'
import * as dotenv from "dotenv"
import cors from 'cors'

dotenv.config();

const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY ||"";

// Rate limiter configuration
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});


const otpStore:Record<string,string>={};


app.post("/generate-otp",otpLimiter,(req,res)=>{
    const ip=req.ip;
    const email=req.body.email;
   if(!email){
     return res.status(400).json({message:"Email is required"});
   }

     const otp=Math.floor(100000+Math.random()*900000).toString();
     
     otpStore[email]=otp;

     console.log(`OTP FOR ${email}L ${otp}`);
     res.status(200).json({message:"OTP generated and logged in"})

});

app.post('/reset-password',passwordResetLimiter,async(req,res)=>{
    const {email,otp,newPassword,token}=req.body;

    let formData = new FormData();
	formData.append('secret', SECRET_KEY);
	formData.append('response', token);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST',
	});
 
    console.log(await result.json());

  const challengeSucceeded = (await result.json()).success;

  if (!challengeSucceeded) {
    return res.status(403).json({ message: "Invalid reCAPTCHA token" });
  }

    if(!email || !otp || !newPassword){
        return res.status(400).json({message:"Email,otp,password are required"});
    }
    if(Number(otpStore[email])===Number(otp)){
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
