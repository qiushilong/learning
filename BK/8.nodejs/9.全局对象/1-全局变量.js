/*
    __filename
    __filename 表示当前正在执行的脚本的文件名。
    它将输出文件所在位置的绝对路径，
    且和命令行参数所指定的文件名不一定相同。
    如果在模块中，返回的值是模块文件的路径。
*/
console.log(__filename);

/*
    __dirname
    __dirname 表示当前执行脚本所在的目录。
*/
console.log(__dirname);

/*
    setTimeout(func,ms)
    clearTimeout(tname)
    setInterval(func,ms)
    clearInterval(tname)
    略
*/

/*
    Console
    console方法:
    console.log()
    console.info()
    console.error()
    console.warn()
    console.time(label)
        输出时间，表示计时开始。
    console.timeEnd(label)
        结束时间，表示计时结束。
    console.dir(obj[, options])
        用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
    console.trace(message[, ...])
        当前执行的代码在堆栈中的调用路径，
        这个测试函数运行很有帮助，
        只要给想测试的函数里面加入 console.trace 就行了。
    console.assert(value[, message][, ...])
        用于判断某个表达式或变量是否为真，接收两个参数，
        第一个参数是表达式，第二个参数是字符串。
        只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。
*/
console.info('提示信息');
console.error('错误信息');
console.warn('警告信息');
console.time("获取数据");
console.timeEnd("获取数据");

/*
    process
    process 是一个全局变量，即 global 对象的属性。
    它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
    process 对象的一些最常用的成员方法。
    exit
    beforeExit
    uncaughtException
    Signal
    还有一些属性
*/