// var scope="global scope";
// function checkscope(){
//     var scope="local scope";
//     return function (){
//         return scope;
//     }
// }
// console.log(checkscope()())

// checkscope={
//     scope:[global,global.checkscope,global.checkscope.fn]
// }

var data=[];
for(let i=0;i<3;i++){
    data[i]=()=>{
        console.log(i);
    }
}
data[1]()