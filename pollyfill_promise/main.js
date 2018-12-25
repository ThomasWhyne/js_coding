//Promise构造函数实例化时接受一个函数为参数，该函数接受两个形参，分别为resolve、reject，是指定的回调函数。
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('a');
//         resolve('a was excuted');
//     },2000)
// });

// p.then(res=>{
//     console.log(res);
// })

const polly_promise=require('./polly_promise');

const p=new polly_promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('jack');
    },2000)
})
p.polly_then(res=>{
    console.log(res);
})