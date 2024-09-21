const express = require('express');
const app = express();


app.get('/user',(req,res)=>{
    res.send('GET Method called');
})
app.post('/user',(req,res)=>{
    res.send('POST Method called');
})
app.delete('/user',(req,res)=>{
    res.send('DELETE Method called');
})

app.put('/user',(req,res)=>{
    res.send('PUT Method called');
})
app.patch('/user',(req,res)=>{
    res.send('PATCH Method called');
})

app.listen(3000,(req,res)=>{
    console.log('Server is succesfully listening on port 3000');
});
