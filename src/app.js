const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.get("/admin/getAllRecords", (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.send("All recodrs");
  } catch (err) {
    res.send(err.message);
  }
});
app.delete("/admin/deleteRecords", (err, req, res, next) => {
    if(err){
        res.send("Someting went wrong");
    }
  res.send("Deleted Records");
});
app.get("/user/Login", (req, res) => {
  res.send("User logged in successfully");
});
app.get("/user/getAlluser", userAuth, (req, res) => {
  res.send("User Records");
});

app.listen(3000, (req, res) => {
  console.log("Server is succesfully listening on port 3000");
});
