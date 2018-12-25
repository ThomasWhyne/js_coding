//题目描述：召集1000只鸡组织乐队，但只能找到999只；

//需求：乐队-->在内存中如何表达：定义对象chior，用以代指乐队，形式为数组或集合；
//      乐队成员-->小鸡-->要求：咯咯叫的才要；；

let chior=[];
var duck={
    duckSing:function(){
        console.log('gaga')
    }
};
let joinChior=function(animal){
    if(animal && typeof animal.ducksing==='function'){
        chior.push(animal)
        }else{
            console.log('sorry')
        }
};


let chicken={
    chickenSing:function(){
        console.log('gege');
    },
};
chicken.ducksing = function () {
    console.log('gaga')
},
joinChior(chicken);
