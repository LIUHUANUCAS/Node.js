
// console.log("hello world")

// function onRequest(request,response){
//     console.log("recived request")
//     response.writeHead(200,{"Content-Type":"text/plain"})
//     response.write("hello world!----")
//     response.end()
// }
// var http = require("http");
// http.createServer(onRequest).listen(8888);
// http.createServer(function (request,response) {
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("hello world!");
//     response.end();
// }).listen(8888);
// console.log("server is listening on port:8888");

var http = require("http");
var url = require("url");
function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("recived request from " + pathname);
        
        route(handle,pathname);
        
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("hello world!----" + pathname);
        response.end();
    }
    var port = 8889;
    http.createServer(onRequest).listen(port);
    console.log("server has started... listening on [%d]",port);
}

exports.start = start;