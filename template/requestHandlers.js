
var exec = require("child_process").exec;

function start(response){
    console.log("request for start .... called" );

    exec("dir",function (error,stdout,stderr){

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    })
}

function upload(response){
    console.log("request for upload .... called" );
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world!");
    response.end();
}

exports.start = start;
exports.upload = upload;