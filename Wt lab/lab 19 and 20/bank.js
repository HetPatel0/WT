const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Clients = require("./client");
const client = require("./client");



mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/Bank_management").then(() => {
    const app = express();
    app.use(bodyParser.urlencoded());

    app.route("/clients").get(async (req, res) => { // get request
        const clients = await Clients.find();
        res.send(clients);
    }).post( async (req, res) => {  //post for update 
        const cli = new Clients({ ...req.body });
        const ans = await cli.save();
        res.send(ans);

    }) 

    app.route("/clients/:id").get(async (req, res) => { // get element by id
        const clients = await Clients.findOne({ _id: req.params.id });
        res.send(clients);
    }).patch( async (req, res) => { // patch which update the data
        const ans = await Clients.findOne({ _id: req.params.id });
        ans.client_id = req.body.client_id;
        ans.acc_no =req.body.acc_no;
        ans.client_name = req.client_name;
        ans.amount_ac = amount_ac;
        
        ans.save();
        res.send("Changed");
    }).delete( async (req, res) => {
        const ans = await Clients.deleteOne({ _id: req.params.id });
        res.send("deleted");
    }) 


    // app.get("/clients", async (req, res) => {
    //     const clients = await Clients.find();
    //     res.send(clients);
    // })

    // app.get("/clients/:id", async (req, res) => {
    //     const clients = await Clients.findOne({ _id: req.params.id });
    //     res.send(clients);
    // })

    // app.post("/clients", async (req, res) => {
    //     const cli = new Clients({ ...req.body });
    //     const ans = await cli.save();
    //     res.send(ans);

    // })

    // app.patch("/clients/:id", async (req, res) => {
    //     const ans = await Clients.findOne({ _id: req.params.id });
    //     ans.client_id = req.body.client_id;
    //     ans.acc_no =req.body.acc_no;
    //     ans.client_name = req.client_name;
    //     ans.amount_ac = amount_ac;
        
    //     ans.save();
    //     res.send("Changed");
    // })

    // app.delete("/clients/:id", async (req, res) => {
    //     const ans = await Clients.deleteOne({ _id: req.params.id });
    //     res.send("deleted");
    // }) 

    app.listen(3000,()=>console.log("server is connected"));

})