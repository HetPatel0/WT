const  express = require("express");
const userModel = require("./usermode");
const app = express();

app.get('/',(req,res) =>{
    res.send("j mera bhai");
})

app.get ('/create', async(req,res) =>{
  let createduser=  await userModel.create({
    name:"jbhai",
    email:"jmerabhai@gmail.com",
    username:"jbhai"
 })
res.send(createduser);
})

app.get ('/update', async(req,res) =>{
    let  updateduser= await userModel.findOneAndUpdate({name:"jbhai"},{username:"jayesh"},{new:true})
   
   
    res.send(updateduser);
  })


app.get('/read' ,async (req,res) =>{
   let users = await userModel.find();
   res.send(users);
})

app.get('/delete',async(req,res) =>{
    let deleduser = await userModel.findOneAndDelete({username:"jbhai"});
    res.send(deleduser);
})

app.listen(3000,()=>console.log("started"));