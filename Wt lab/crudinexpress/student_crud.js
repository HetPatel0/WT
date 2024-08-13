const express = require("express")
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded());

arr =[
    {
       "enroll" : "23050223",
       "name": "rishi",
       "cgpa" : "7.8",
       "bklog" :"0"
    },
    {
      "enroll" : "230502276",
      "name": "modi",
      "cgpa" : "8.1",
      "bklog" :"1"
   },
   {
      "enroll" : "23050265",
      "name": "rahul",
      "cgpa" : "8.5",
      "bklog" :"0"
   },
   {
      "enroll" : "arvind",
      "name": "rishi",
      "cgpa" : "6.3",
      "bklog" :"2"
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
    