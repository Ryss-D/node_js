const http = require('http');

//function rqListener(req, res){
//
//}

//hhtp.createServer(reqListener);

//http.createServer(fuction(req,res){})

const server = http.createServer((req, res)=>{
console.log(req);
})

server.listen(3000);


