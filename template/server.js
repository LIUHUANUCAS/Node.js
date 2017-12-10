var http = require("http");
var url = require("url");
function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("recived request from " + pathname);
       
        route(handle,pathname,response);
    }
    
    var port = 8889;
    http.createServer(onRequest).listen(port);
    console.log("server has started... listening on [%d]",port);
}

exports.start = start;