import express from 'express'
const app=express();
const port=3000;

app.get('/',(req,res)=>{
   res.send("<h1>Hello World</h1>");
})

app.get('/about',(req,res)=>{
    res.send("<h1>About</h1>");
 })

 app.get('/contact',(req,res)=>{
    res.send("<h1>Contact</h1> <p>+91 1234567890</p>");
 })


app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})