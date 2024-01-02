const http= require('http');
function print(req, res){
    console.log(req.url, req.headers, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Welcome to my Node Js project</title></head>')
    res.write('<body><h1> Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end();
}
const server=http.createServer(print);
server.listen(3000);
