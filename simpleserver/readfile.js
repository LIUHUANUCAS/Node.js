var fs = require("fs");
fs.readFile('server.js',function (err,data){
    if(err ) 
    return console.error(err);
    console.log(data.toString()+'----non_blocking');
});

console.log('end...');

var data = fs.readFileSync('server.js');
console.log(data.toString());
console.log('end2...');