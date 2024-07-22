const fs = require('fs');


fs.exists('./abc.txt',(exists) => {
    console.log(exists ?'Found':'NotFoound');
}) 


fs.stat('abc.txt',(err,data) =>{
    if(err) throw err;
    console.log(data);
})

fs.unlink('abc.txt',(err)=>{
    if (err) throw err;
    console.log("File deleted")
});


fs.rename('abc.txt','xyz.txt',(err)=>{
    if (err) throw err;
    console.log("file renamed ");

})
fs.readFile('abc.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})
fs.writeFile('abc.txt','HElllo',(err)=>{
    if(err) throw err;
    console.log("saved")
})


fs.appendFile('abc.txt','HElll Worlsssss',(err)=>{
    if(err) throw err;
    console.log("saved")
})