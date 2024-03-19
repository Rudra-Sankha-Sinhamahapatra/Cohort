const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course,User } = require("../db/index");
const router = Router();
const jwt=require('jsonwebtoken');
const {JWT_SECRET} = require("../config");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const admin=await Admin.find({
        username:username
    })

    if(admin.length==0){
    //if a user with this username exists or not
   await Admin.create({
        username:username,
        password:password
    })
        res.json({
            msg:"Admin created successfully"
        })}
        else{
            res.status(411).json({
                msg:"Admin Exists!please sign in"
            })
        }
  
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
     
    const user=await Admin.find({
        username:username,
        password:password
    })
    if(user){
    const token= jwt.sign({
        username
    },JWT_SECRET);
    
    res.json({
        msg:"Admin Signed in Successfully",
        token
    })
}
else{
    res.status(404).json({
        msg:"Admin dosen't exist please sign up"
    })
}
});

router.post('/courses', adminMiddleware,async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    //zod
   const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })
  
    res.json({
        msg:"Course created Successfully",courseId:newCourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
           courses:response
       })
});

module.exports = router;