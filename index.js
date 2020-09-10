var http = require('http');

var server = http.createServer(function(request, response) {
    
    const { headers } = request;

    var message = `hello world!\n`;
    for (const h in headers) {
        message += `headers[${h}] = ${headers[h]}\n`;
    }

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(message);
    console.log(message);
});

var port = 8088;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
