const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world joigo");
})  

app.listen(3000, () => {
    console.log("server run @3000");
})                                                           