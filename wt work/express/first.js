const express = require("express");
const http = require("http")
const app = express();
app.get('/',(req,res)=>{
    return res.send("Hello from home page");
})

app.get('/about',(req,res)=>{
    return res.send ("hello from about page");
})


app.listen(3000,()=>console.log("server is started"));
// const myServer  = http.createServer(app);
// myServer.listen(3000,()=>console.log("server started" ));