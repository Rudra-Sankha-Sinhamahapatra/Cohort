import express from "express";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
    result:withSpace(18)
  });
});

function withSpace (x:number){
  return x;
}