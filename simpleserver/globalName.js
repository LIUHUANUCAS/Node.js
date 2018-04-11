

console.log(__filename);
console.log(__dirname);

var os = require('os');
console.log(os.type());
console.log(os.platform());
console.log(os.totalmem());



var t = setTimeout(timeout, 2000);
// clearTimeout(t);

function second(){
    console.log('second....');
}
t = setInterval(second,1000);
function timeout(){
    console.log("hello world");
    clearInterval(t);
}