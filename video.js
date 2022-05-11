const fs=require("fs");
fs.writeFileSync("read.txt","welcome to my channel")
const fs=require("fs");
fs.writeFileSync("read.txt","thapa technical,welcome to my channel")
const buf_data=fs.readFileSync("read.txt");
console.log(buf_data)
// fs.renameSync("read.txt","readwrite.txt")