const fs=require("fs");
const path =require("path");
const dir="./src";

fs.readdir(dir,(err,files)=>{
    if(err){
        console.error(err);
        return;
    }
    files.forEach(file=>{
        //获得一个文件的状态，返回一个对象，包含文件状态信息
        fs.stat(path.join(dir,file),(err,stat)=>{
            console.log(stat)
        })
    })
})

//实现功能，但这是流程性代码，不适合复用