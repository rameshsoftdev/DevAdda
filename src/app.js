const express = require("express");
const connectDB = require('./config/database');
const app = express();

connectDB().then(() => {
  console.log('connection established successfully');
  app.listen(3000, (req, res) => {
    console.log("Server is succesfully listening on port 3000");
  });
}).catch((err) => {
  console.error('connection cannot be established');
});


