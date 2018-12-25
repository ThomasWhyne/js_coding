const fs= require("fs");
const path =require("path");

// function findLargest(){

// }

module.exports=findLargest=( dir,cb )=>{
    fs.readdir(dir,(err,files)=>{
        if(err){
            //如果出错，不再是单纯的出错显示，而是要使用cb判断，一个任务失败了，是否继续其他任务
            return cb(err);
        }
        var counter =files.length;
        var errored=false;
        var stats =[];
        files.forEach((file,index)=>{
            fs.stat(path.join(dir,file),(err,stat)=>{
                if(errored)return;
                if(err){
                    errored = true;
                    return cd(err);
                }
                stats[index]=stat;
                //判断所有文件都获取完
                if(--counter == 0){
                    //整个fs.stat是一个io过程，是异步的，而外层的forEach是同步执行的代码，
                    //一定存在的情况是，外层循环结束，fs.stat回调尚未执行，外层stats数组为空
                    //这里在每一次的异步互调中，都会对counter进行判断，是否所有文件读取已经完成
                    // let stat_sizes = stats.map((x, index) => {
                    //     return stat.size;
                    // })
                    // let max=Math.max([...stat_sizes]);
                    // let max_file=stats.findIndex(x=>(x.size=max));
                    var largest=stats
                                            .filter(stat=>(stat.isFile()))
                                            .reduce((prev,next)=>{
                                                if(prev.size>next.size){
                                                    return prev;
                                                }else{
                                                    return next;
                                                }
                                            })
                    cb(null,files[stats.indexOf(largest)]);
                }
            })
        })
    })
}