const mongoose = require("mongoose");


const connect = mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/mangement?retryWrites=true&w=majority&appName=Cluster0")

module.exports={connect};
