- 手写promise  
>   了解A+规范  
        promise出现以前，回调函数解决了异步问题，但其倒金字塔式的回调地狱，给代码阅读维护带来了极大的困难。
        ECMAScript 2015 (ES6)提出了A+规范。  
        首先Promise是一个类，这个类接受一个构造函数，其可以执行resolve或reject，并返回一个promise实例。  

- 1、 Promise将executor分装在构造函数内部，并提供resolve、reject两个函数给executor到时回调  
- 2、then是同步的，跟promise构造函数一样，属于语法的一方面，将onResolved、onRejected两个函数提供给实例对象，并将其通过外部箭头函数绑定this，结构化存储起来，

- 3、executor高阶函数才是回调真正执行的地方，负责this.status,this.reason,this.value的处理