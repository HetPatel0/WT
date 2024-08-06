const express = require('express');
const app = express();
const port =3000;
const demo = (req,res,next) =>{
    console.log('mssg');
    next();
}

app.use('/xyz',demo);

app.get('/xyz',(req,res)=>{
    res.send("Hi from xyz")
})

app.listen(3000,()=>{
    console.log("server is running");
})