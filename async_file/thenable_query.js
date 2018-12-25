var fs=require('fs');
var path = require("path");

var readDir=function( dir ){
    return new Promise((resolve,reject)=>{
        fs.readdir(dir,( err, files )=>{
            if( err )reject(err);
            resolve(files);
        })
    })
}

var stat=function stat(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(err,stat)=>{
            if(err)reject(err);
            resolve(stat);
        })
    })
}

var findLargest=( dir )=>{
    return readDir(dir)
        .then(files=>{
            let promises=files.map((file)=>{
                return stat(path.join(dir,file));
            })
            return Promise.all(promises)
                .then(stats=>({ stats,files }))
        })
        .then(data=>{
            let largest =data.stats
                .filter(stat=>stat.isFile())
                .reduce((prev,next)=>(prev>next?prev:next))
            return data.files[data.stats.indexOf(largest)];
        })
}

findLargest("./src")    
    .then(filename=>{
        console.log(`最大的文件是：${filename}`);
    })
    .catch(err=>{
        console.log(err);
    })
