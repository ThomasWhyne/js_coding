 Ajax Suggestion ==> google suggestion
 react里面的onChange事件其实包含了浏览器的input的事件
猜出用户想要搜索的内容，用户边输入（input事件）边做建议，由ajax后端匹配并返回一个list dom
但请求频率过快，需要节流，在一定时间内之执行限定次数函数

throttle实现：
    onmousemove这样一些事件会频繁被触发，如果频繁作出响应

    1、使用时间戳+闭包
    2、使用计时器
    区别：
        体验细节在于第一次执行的方式，计时器会在第一次执行时延迟
        时间戳由于是先为0，判断now-previous>wait,会先执行