const express = require("express");
const app = express();
const user =[{
    name:"John",
    kidneys:[{
        healthy: false
    }]

    
}]

app.get("/",(req,res) => {
    const johnKidney = user[0].kidneys;
    console.log(johnKidney);


})

app.listen(3000);