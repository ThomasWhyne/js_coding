- 使用babel编译es6class    
创建.babelrc文件，指定编译规则，设置"preset":["env"],yarn add babel-core babel-preset-env 添加编译核心模块
babel demo.js -o demo-es5.js

es7中有新特性：
    class person{
        foo='bar'
        constructor(){

        }
    }
    可在类中任意地方声明属性，这种特性尚未被babel preset env支持，需要使用插件transform-class-properties 在.babelrc，plugin字段中声明
        "plugins": [
        ["transform-class-properties"]
    ]
    插件安装命令为yarn add babel-plugin-transform-class-properties  

es5的构造函数不使用new运算符时也可以被调用，那么在被编译后如何杜绝这种情况？  

增加一个判断函数，原理是如果函数被普通调用其this指向全局，如被new调用则指向生成的实例对象，如果函数中的this不是构造函数的实例，则该函数没有被new调用  


es6中定义的类，其prototype定义的所有方法都是不可枚举的；
