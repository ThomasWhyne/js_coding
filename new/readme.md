new 到底做了什么？  
let p=new Person();
p是Object类型

1、parent被执行，加了new之后parent函数会在p的作用域下执行，this指向p构造函数里的属性被当做p的属性被创建  
2、p.__proto__指向Person.prototype