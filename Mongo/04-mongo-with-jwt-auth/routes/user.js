const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config");
const jwt=require('jsonwebtoken');
const { Admin,Course,User } = require("../db/index");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.find({
        username:username
    })

    if(user.length==0){
        
        await User.create({
            username:username,
            password:password
        })
        res.json({
            msg:"User Created Successfully"
        })
    }
    else{
        res.status(411).json({
            msg:"User exists! Please sign in"
        })
    }

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
   
    const user=await User.find({
        username:username,
        password:password
    });

    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            msg:"User Successfully Signed in",
            token
        })
    }

    else{
        res.status(404).json({
            msg:"User dosen't exist please sign up!"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({});
    res.json({
        courses:response
    })

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.username;
    console.log(username);
    const courseId=req.params.courseId;
    try{
 await User.updateOne({
    username:username
 },{
    "$push":{
        purchasedCourses:courseId
    }
 })
    }
    catch(e){
        console.log(e);
    }
    res.json({
        msg:"Course Purchased Successfully",courseId
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    const user=await User.findOne({
        username:username
    });
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses:courses
    })
});

module.exports = router