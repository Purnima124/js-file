// const fs=require("fs")
// fs.writeFileSync("read.txt","welcome to my channel")
// fs.renameSync("read.txt","readwrite.txt")

var fs=require("fs");
org_data=buf_data=fs.readFileSync("read.txt");
org_data=buf_data.toString();
console.log(org_data)
