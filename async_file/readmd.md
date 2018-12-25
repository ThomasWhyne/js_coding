1、 容错处理是node的核心能力之一
    - node 回调一般是error-first的

    找到目录下最大的文件

    实现方案：
    
    异步回调模式：
        要点：
            保持回调error-first特性
            注意同步异步任务之间的协调关系
        核心模块及方法：
            fs readdir fs.stat
        整体架构：
            function examineMax => 封装文件读取计算逻辑，返回调用回调函数，传递最大文件
            function queryMax =>发起任务，负责传递文件夹地址、回调函数
        核心逻辑:
            statsArr =>存储文件状态对象
            lenCouter =>异步任务关键，作为latch保证在所有异步任务完成后执行计算，没执行一次异步任务数值递减
            Array.prototype.fliter =>利用stat.isFile 筛选文件夹中的文件
            Array.prototype.reduce =>执行聚合运算，每次迭代只返回previous、accumulator中较大的一项
            最后利用下标对应，返回cb files中最大一项

    Promise模式：
        要点：
            链式执行异步任务，做好任务执行分块
        整体架构：
            findLargets =>传入文件路径、发起任务query
            readDir => 封装fs.readdir方法，返回Promise对象，负责resolve()<=fs.readdir回调数据<=files
            
            在readDir函数内部返回的Promise后书写链式方法，在其决议后层层推进异步任务
            readDir( receive dirname )=>Primise( packup fs.readdir, resolve callback data) 
                                                            =>then( receive data=>files execut function stat) =>stat (return Promise packup fs.stat stat will describe status for single file=>in need for map to multiple call)=>对于每一个stat调用返回一个Promise，然后使用Promise.all集中，然后统一组织resolve返回