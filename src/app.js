const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const userData = req.body;
  try {
    user = new User(userData);
    await user.save();
    res.send("User Created Successfully!");
  } catch (err) {
    res.send("Error in save :" + err.message);
  }
});
app.get("/feed", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const users = await User.find({});
    users.length ? res.send(users) : res.send('No Feed found')
  } catch (err) {
    res.send("Error in save :" + err.message);
  }
});
app.delete("/user",async (req,res)=>{
   const userId = req.body.userId;
   try {
    const deletedusers = await User.findByIdAndDelete(userId);
    res.send(deletedusers);
  } catch (err) {
    res.send("Error in save :" + err.message);
  }
});
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    // Ensure updated document is returned by using { new: true }
    const updatedUser = await User.findByIdAndUpdate(userId, data, { returnDocument:"before" });

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send(updatedUser);
  } catch (err) {
    res.status(500).send("Error in update: " + err.message);
  }
});


connectDB()
  .then(() => {
    console.log("connection established successfully");
    app.listen(3000, (req, res) => {
      console.log("Server is succesfully listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("connection cannot be established");
  });
