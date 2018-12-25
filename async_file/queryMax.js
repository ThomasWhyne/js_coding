const fileFinder=require("./examineMax.js");
fileFinder("./src",function(err,filename){
    if(err){
        return console.error(err);
    }
    console.log(filename);
});

// 找到文件夹下最大文件思路:
    // 1、使用 error-fist callback方案
    // 2、then方案
    // 3、async/await方案
    // 4、generator方案
