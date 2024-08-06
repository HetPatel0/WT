const http = require('http');
const port =3000;
const server =http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
});

server.listen(port,()=>{
    console.log('server running at 3000');
})