require('dotenv').config()
const express = require("express");
const app=express();
const rootRouter=require('./routes/index')
const cors=require('cors');
const bodyParser = require('body-parser');
const port=3000;

app.use(express.json());
app.use(cors());

console.log(process.env.MONGO_URL)

app.use("/api/v1",rootRouter);

app.listen(()=>{
    console.log(`app running on port ${port}`);
})

