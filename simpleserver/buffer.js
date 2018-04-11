var buf = new Buffer(10);
console.log(buf);
buf = new Buffer([10, 20, 30, 40, 50]);
console.log(buf);

buf = new Buffer("simple easy learning",'utf-8');
console.log(buf);
n = buf.write('ABCDEFGHIJKLMNOPQRS');
console.log(buf);
console.log(buf.toString());
console.log(n);

buf = new Buffer(26);
for(var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString())
console.log(buf.toJSON())
