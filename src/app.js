const express = require('express');
const app = express();

app.use('/',(req, res)=>{
    res.send('Hello from Node Server - home page');
})
app.use('/contact',(req, res)=>{
    res.send('Hello from Node Server - contact me');
})
app.use('/about',(req, res)=>{
    res.send('Hello from Node Server - about me');
})

app.listen(3000,()=>{
    console.log('Server is succesfully listening on port 3000');
});
