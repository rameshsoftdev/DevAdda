const express = require("express");
const app = express();

// Signature
// app.use('/route',rh1,rh2,rh3,rh4,rh5)
// app.use('/route',rh1,rh2,rh3,rh4,rh5)
// app.use('/route',rh1,[rh2,rh3],rh4,rh5)

app.use(
  "/user",
  (req, res, next) => {
    console.log("Route 1");
    next();
    //    res.send('Route 1');
  },
  [(req, res, next) => {
    // res.send('Route 2');
    console.log("Route 2");
    next();
  },
  (req, res, munde) => {
    // res.send('Route 3');
    console.log("Route 3");
    munde();
  }],
  (req, res) => {
    res.send("Route 4");
  }
);

app.listen(3000, (req, res) => {
  console.log("Server is succesfully listening on port 3000");
});
