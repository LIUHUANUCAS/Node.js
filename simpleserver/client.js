var http = require('http');

var options = {
    host:'localhost',
    port:8888,
    // path:'/index.html'
    method : 'POST'
};

var req = http.request(options,(resp)=>{
    var body = '';
    resp.on('data', (data)=> {
        body += data;
    });
    resp.on('end',() => {
        console.log(body);
    });
});
var u = {
    'username':'liuhuan',
    'age' : 21
}

req.write(JSON.stringify(u));
req.end();