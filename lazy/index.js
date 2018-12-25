// let originTimer=()=>{
//     let timer=new Date();
//     return ()=>(timer);
// }

// let timer = originTimer();

// console.log(timer());
// console.log(timer());
// console.log(timer());

// var timer;
//  function originTimer(){
//      return timer?timer:timer=new Date();
//  }

// let originTimer=(()=>{
//     let timer=new Date();
//     return ()=>(timer);
// })()

// console.log(originTimer())
// console.log(originTimer())
// console.log(originTimer())
// console.log(originTimer())
// console.log(originTimer())
// console.log(originTimer())

// class originTimer{
//     constructor(){
//         if(this.timer)return this.timer;
//         this.timer=new Date();
//     }
// }
// let timer=new originTimer();
// console.log(new originTimer().timer);

let originTimer=()=>{
    let timer=new Date();
    return (originTimer = () => timer)();
}
console.log(originTimer());
console.log(originTimer());
console.log(originTimer());
console.log(originTimer());