const mongoose=require('mongoose');
const { string, object } = require('zod');
mongoose.connect(process.env.MONGO_URL);

const userSchema=new mongoose.Schema({
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
});

const accountSchema=new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
balance:{
    type:Number,
    required:true
}
});

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("Accounts",accountSchema);

module.exports={
    User:User,
    Account:Account
};