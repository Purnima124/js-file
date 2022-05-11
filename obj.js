const fs=require("fs");
const obj={
    name:"purnima",
    age:23,
    plas:"Bihar"
}
const jsondata=JSON.stringify(obj);
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("done")
})
// const jsondata=JSON.stringify(obj)