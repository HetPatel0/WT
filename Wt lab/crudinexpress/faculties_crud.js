const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded());

arr =[
    {
        "name" : "Rajnath Sinh",
        "dept" : "EC",
        "salary" : "50000",
        "exp" : "2"
    },
    {
        "name" : "S. jaishankar",
        "dept" : "CE",
        "salary" : "75000",
        "exp" : "4"
    },
    {
        "name" : "Ajit Doval",
        "dept" : "ME",
        "salary" : "40000",
        "exp" : "2"
    },
    {
        "name" : "Amit Shah",
        "dept" : "EC",
        "salary" : "60000",
        "exp" : "2"
    },
 ]

     app.get("/home",(req,res)=>{
        res.json(arr);
     })

     app.get("/home:id",(req,res)=>{
        res.send(arr[req.params.id])
     })

     app.post('/home',(req,res)=>{
      arr.push(req.body);
      res.send("object  added");
  });

     app.put("/home/:id",(req,res)=>{
      const idToedit = arr.findIndex((arr)=>{
         if(arr.id==req.params.id){
            return true;
         }
      })
      arr[idToedit] = req.body;
      res.send("objects updated");
      
    
     })

     app.delete('/home/:id',(req,res)=>{
      const idTodelete = arr.findIndex((arr)=>{
          if(arr.id==req.params.id){
              return true;
          }
      });
      arr.splice(idTodelete,1);
      res.send("object deleted");
  });

     app.listen(3000,()=>{
        console.log("SERVER IS RUNNING");
     });
    