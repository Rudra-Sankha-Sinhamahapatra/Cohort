import express from 'express'
import {BACKEND_URL} from '@repo/common/config'

const app=express();

app.use(express.json());

const port=3003;

console.log(`${BACKEND_URL}`);
app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})