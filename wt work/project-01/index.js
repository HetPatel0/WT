const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express(); 
app.use(express.urlencoded({extended: false}));

const PORT = 3000;

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((users)=> `<li> ${users.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

// rest Routes are here
app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.get('/api/users/:id',(req,res)=>{
      const id = Number(req.params.id);
      const user = users.find((user)=>user.id===id);
      return res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id : users.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err, data )=>{
        return res.json({status:  "succsses", id  :users.length} );
    })
    
})
app.listen(PORT,()=> console.log("server is running "));