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
