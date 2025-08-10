const express = require("express");
// const { connect } = require("mongoose");
const { productRouter } = require("./routes/products.routes");
const cors = require('cors');
const { userRouter } = require("./routes/user.routes");
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/mangement?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use("/products",productRouter);
    app.use("/user",userRouter);


    app.listen(8000, async()=>{
        console.log("server is started")