const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //if a user with this username exists or not
   await Admin.create({
        username:username,
        password:password
    })
        res.json({
            msg:"Admin created successfully"
        })
     
  
});

router.post('/courses', adminMiddleware, async(req, res) => {
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