// 流的几种模式
// readable
// writeable
// duplex
// transform

// 事件类型
// data 
// end
// error
// finish

var fs = require('fs');
var data = ''

var readerStream = fs.createReadStream('server.js');
var writeStream = fs.createWriteStream('output1.js');
readerStream.pipe(writeStream);

readerStream.setEncoding('utf-8');

readerStream.on('data',function (chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
    // writeStream2File(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});

console.log('end run...');

// write

function writeStream2File(data){

    var writeStream = fs.createWriteStream('output.js');
    writeStream.write(data,'UTF-8');
    writeStream.end();
    writeStream.on('finish',function(){
        console.log('write complete!!!');
    });
    
    writeStream.on('error',function(err){
        console.log(err.stack);
    });
    console.log('write end...');
}