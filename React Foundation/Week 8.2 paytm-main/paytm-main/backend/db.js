const mongoose=require('mongoose');
const { string } = require('zod');
mongoose.connect(process.env.MONGO_URL);

const userSchema=mongoose.model({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:30,
        minLength:3
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
        minLength:3
    }
})

const User=mongoose.model("users",userSchema);

module.exports={
    User:User
};