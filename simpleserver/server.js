
// console.log("hello world")

var http = require("http");
var qs  = require('querystring')

var obj = {"username":"liuhuan","passwd":"world"};
// let body = []
var body = JSON.stringify(obj)
var bobj = JSON.parse(body)
// console.log(bobj)
// body = Buffer.concat(body).toString()
function onRequest(request,response){
    console.log("recived request")
    response.writeHead(200,{"Content-Type":"text/plain"})
    if (request.method == 'POST'){
        var postbody = '';
        var postjson = {};
        request.on('data',function (data){
            postbody += data.toString();
            // console.log(data.toString());
        });
        request.on('end',function(){
            console.log()
            postjson = qs.parse(postbody);
        })
        console.log('reqestdata:',postjson);
        respData = {};
        for (var x in postjson){
            respData[x] = 'new_'+postjson[x];
            // respData[postjson[x]] = x
        }
        console.log('respdata',respData);
        response.write(JSON.stringify(respData));
    }else{
        response.write(body)
    }
    // response.write("body")
    response.end()
}
// http.createServer(onRequest).listen(8888);
server = http.createServer().listen(8888);
server.on('request',onRequest)
console.log("server is listening on port:8888");

