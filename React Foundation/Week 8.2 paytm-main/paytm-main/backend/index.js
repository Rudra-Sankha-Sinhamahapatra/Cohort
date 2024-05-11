require('dotenv').config()
const express = require("express");
const app=express();
const rootRouter=require('./routes/index')
const cors=require('cors');
const bodyParser = require('body-parser');
const port=3000;

app.use(express.json());
app.use(cors());


app.use("/api/v1",rootRouter);

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})

