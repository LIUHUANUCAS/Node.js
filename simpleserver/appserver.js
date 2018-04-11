
var http = require("http");
var fs = require('fs');
var url = require('url');

http.createServer((req,resp) => {
    var pathname = url.parse(req.url).pathname;
    console.log('req for ' + pathname.substr(1));
    var fname = pathname.substr(1);
    fs.readFile(fname,(err,data) => {
        if(err){
            console.log(err);
            resp.writeHead(404,{'Content-Type': 'text/html'});
        }else{
            resp.writeHead(200,{'Content-Type': 'text/html'});

            resp.write(data.toString());
        }
        resp.end();
    });
    // resp.writeHead(200,{'Content-Type': 'text/plain'});
    // resp.end(); //'helloworld....end\n'
}).listen(8888);

console.log('listening localhost:8888');

