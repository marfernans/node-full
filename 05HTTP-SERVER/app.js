const http = require('http');

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1> HELLO NODE.JS en el LA WEB :)</h1>');

}

http
    .createServer(webServer)
    .listen(3000, 'localhost', ()=> console.log('SERVIDOR CORRIENDO EN HTTP :3000'));
