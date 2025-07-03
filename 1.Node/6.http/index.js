const http = require('http')
const server = http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Boom Boom')
})
const port = 3000
server.listen(port,()=>{
    console.log('Server listening on Port: ',port);
    
})