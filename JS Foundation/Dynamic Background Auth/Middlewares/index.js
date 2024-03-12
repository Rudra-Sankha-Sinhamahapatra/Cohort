const express=require('express');

const app=express();
const port=3000;

app.use(express.json());

function isOldEnough(age){
if(age>=14){
    return true;
}
else{
    return false;
}
};

function isOldEnoughMiddleWare(req,res,next){
    const age=req.query.age;
    if(age>=14){
       next();
    }
    else{
        res.json({
            msg:"You are Underage",
        })
    }

}

// app.use(isOldEnoughMiddleWare);

app.get("/ride1",isOldEnoughMiddleWare,function(req,res){
res.json({
    msg:"You have successfully riden the ride",
})
});

app.get("/ride2",isOldEnoughMiddleWare,function(req,res){
res.json({
msg:"You have successfully riden the ride",
});

});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})