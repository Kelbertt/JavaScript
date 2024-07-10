const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
});

server.listen(3000, () => {
    console.log('Servidor Ativo!');
})