const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const port = 3000;

mongoose.connect(
  "mongodb+srv://rssmp120:rohan3046@cluster0.nsofrmr.mongodb.net/user_app"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  // should check in the database
  const user = await User.findOne({ username: username });
  return user !== null;
}
app.post("/signup", function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const userDetails = new User({
    name: name,
    username: username,
    password: password,
  });
  userDetails
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => console.log(err));
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});


app.get("/users",async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    const user=await User.findOne({username:username});
    // console.log(user);
    if(user){
      const allUsers=await User.find({});
      //console.log(allUsers)
      const other=allUsers.pop(user);
    console.log(other);
     res.send(other);
    }

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port, () => {
  console.log(`Server Runnning on Port ${port}`);
});
