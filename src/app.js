const express = require("express");
const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth')

app.use('/admin',adminAuth);
app.get('/admin/getAllRecords',(req,res)=>{
    res.send('All recodrs');
});
app.delete('/admin/deleteRecords',(req,res)=>{
    res.send('Deleted Records');
});
app.get('/user/Login',(req,res)=>{
    res.send('User logged in successfully');
});
app.get('/user/getAlluser',userAuth,(req,res)=>{
    res.send('User Records');
});


app.listen(3000, (req, res) => {
  console.log("Server is succesfully listening on port 3000");
});
