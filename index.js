var restify = require('restify');

function respond(req, res, next) {
    res.charSet('utf-8');
    res.contentType = 'json';
    res.send(200, {hello: 'world'});
    next();
}

function respond_headers(req, res, next){
    const { headers } = req;

    var message = "";
    for (const h in headers) {
        console.log(`[${h}] = ${headers[h]}`);
        message += `[${h}]=${headers[h]} `;
    }

    res.charSet('utf-8');
    res.send(200, message);
    next();
}

var server = restify.createServer();

server.get('/', respond);
server.get('/headers', respond_headers);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});