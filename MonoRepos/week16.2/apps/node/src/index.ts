import express from "express"
import {URL} from '@repo/graf/src/index'

const port=3003;
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    try{
    res.status(200).json({
        message:"success",
        status:"200",
        url:`${URL}`
    })
} catch(error){
    res.status(404).json({
        message:error,
        status:"404"
    })
}
})

app.listen((port),()=>{
    console.log(`server running on port ${port}`);
})