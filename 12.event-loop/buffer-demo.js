// Buffers are nothing but objects which help you to handle binary data

const buffer1 = Buffer.alloc(10); // allocate a buffer of 10 bytes -> zeroes
// console.log(buffer1); O/P = <Buffer 00 00 00 00 00 00 00 00 00 00>

const bufferFromString = Buffer.from("Hello");
console.log(bufferFromString); // O/P = <Buffer 48 65 6c 6c 6f>

const bufferFromIntArr = Buffer.from([1, 2, 3, 4, 5]);
console.log(bufferFromIntArr); // O/P = <Buffer 01 02 03 04 05>

buffer1.write("Node js");
console.log("after writing node js to buffer1,", buffer1.toString());
// after writing node js to buffer1, Node js
