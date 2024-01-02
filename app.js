const http= require('http');
function print(req, res){
    const url=req.url;

    if(url==='/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Welcome to my Node Js project</title></head>')
        res.write('<body><h1> Welcome Home</h1></body>')
        res.write('</html>')
        res.end();
       

    }

    else if(url==='/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Welcome to my Node Js project</title></head>')
        res.write('<body><h1> Welcome to about us page</h1></body>')
        res.write('</html>')
        res.end();

    }

    else if (url==='/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Welcome to my Node Js project</title></head>')
        res.write('<body><h1> Welcome to my Node JS project</h1></body>')
        res.write('</html>')
        res.end();

    }
   
}
const server=http.createServer(print);
server.listen(3000);
