· 编写函数，每次返回首次调用产生的日期：

    实现思路：
        闭包，
        latch ,
        对象,
        惰性函数=>解决兼容性，浏览器嗅探；设计模式：适配器模式
        在函数体内定义其自身功能，推迟了函数的定义，js里的函数是可以重写的
        --- 
        let originTimer=()=>{
            let timer=new Date();
            return (originTimer = () => timer)();
        }
        ---