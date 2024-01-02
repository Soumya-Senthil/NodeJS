const http= require('http');
function print(req, res){
    console.log("soumya");


}
const server=http.createServer(print);
server.listen(4000);