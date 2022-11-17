
var http = require('http');

var server = http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Responding route: " + req.url);
    console.log("web request");
})

server.listen(3000);

console.log("Server running");