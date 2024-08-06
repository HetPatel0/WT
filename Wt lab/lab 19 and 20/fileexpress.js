const express = require("express");
const fs = require("fs");
const app = express();

app.get('/about', (req, res) => {
    fs.readFile('about.txt', (err, data) => {
        if (err) return err;
        res.write(data);
        return res.send();

    })

})  

app.get('/contact', (req, res) => {
    
 fs.readFile('contact.txt', (err, data) => {
        if (err) return err;
        res.write(data);
        return res.send();

    })

})  



app.listen(3000, () => {
    console.log("server run @3000");
})                                                           