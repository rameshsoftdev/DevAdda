const express = require('express');
const app = express();

app.get('/ab?c',(req,res)=>{
    res.send('ab?c route');
})
app.get('/pqr+st',(req,res)=>{
    res.send('pqr+st route');
})
app.get('/*pqr',(req,res)=>{
    res.send('/*pqr route');
})
app.get('/aas(sd)+as',(req,res)=>{
    res.send('aas(sd)+as route');
})
app.get('/item',(req,res)=>{
    res.send(req.query); // query parameters
})

app.get('/category/:id/:catname/',(req,res)=>{
    res.send(req.params); // query parameters
})

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
