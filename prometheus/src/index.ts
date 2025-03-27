import express from "express";
import { middleware } from "./middleware";
import client from "prom-client"
import { metricsMiddleware } from "./metrics/index";

const app = express();

app.use(metricsMiddleware);
app.use(middleware);
app.use(express.json());

app.get("/metrics", async (req, res) => {
  try {
  const metrics = await client.register.metrics();
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
} catch (err) {
  res.status(500).end(err);
}
});

app.get("/user",async(req,res)=>{
  try {
    await new Promise((resolve)=>setTimeout(resolve,1000));
    res.send({
        name:"Rudra",
        age:25
    })
  }    catch (err) {
    res.status(500).send(err);
}
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
