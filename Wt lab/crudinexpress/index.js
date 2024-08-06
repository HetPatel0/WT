const express = require("express")
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded());

arr =[
    {
       "id" : "1",
       "product": "mobile",
       "price" : "90000"
    },
    {
        "id" : "2",
        "product": "tv",
        "price" : "50000"
     },
     {
        "id" : "3",
        "product": "fridge",
        "price" : "15000"
     },
     {
        "id" : "4",
        "product": "printer",
        "price" : "10000"
     },
     {
        "id" : "5",
        "product": "laptop",
        "price" : "60000"
     }]

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
    