const mongoose=require('mongoose');
const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

mongoose.connect("mongodb+srv://rssmp120:BrUiBMCfzq7Vekcv@cluster0.nsofrmr.mongodb.net/user_app");


const User = mongoose.model('Users', { name: String,email: String,password: String });

app.post("/signup",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    //User.update, User.delete
    const existingUser=await User.findOne({email:username});
    //CRUD=>create,update,delete,Read
    if(existingUser){
        return res.status(400).send("Username Already Exists!");
    }
    const user = new User({
        name: name,
        email:username,
        password:password
       });
       user.save();
       res.json({
        "msg":"User Created Successfully"
       });
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})

