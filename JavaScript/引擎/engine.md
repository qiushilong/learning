# JavaScript 引擎

JavaScript 引擎是执行 JavaScript 代码的程序或者说是解释器。JavaScript 引擎能够被实现成标准解释器或者是能够将 JavaScript 以某种方式编译为字节码的即时编译器。

## 流行引擎

- v8 -- google 开发，使用 C++ 编写的开源引擎。
- Rhino -- Mozilla 基金会管理，纯 Java 开发。
- SpiderMonkey -- 第一个 JavaScript 引擎，在当时支持了 Netscape Navigator，现在是 Firefox 的引擎。
- JavaScriptCore -- 苹果公司为 Safari 开发，并以 Nitro 的名字推广的开源引擎。
- Chakra（JScript9） -- IE 引擎。
- Chakra（JavaScript） -- Edge 引擎。
...

## 为什么创建 v8 引擎
v8 引擎是由 Google 用 C++ 开发的开源引擎，这个引擎也在 Google Chrome 中使用。和其他引擎不同的是，v8 也用于运行 nodejs。
v8 最初被设计出来是为了提高浏览器内部 JavaScript 的执行性能。为了获取更快的速度，v8 将 JavaScript 代码编译成了更高效的机器码，而不是使用解释器。它就像 SpiderMonkey 或者 Rhino 等许多现代 JavaScript 引擎一样，通过运用即时编译器将 JavaScript 代码编译为机器码。而这之中最主要的区别就是 v8 不生成字节码或者任何中间代码。


## 内部
 在 V8 的 v5.9 版本出来之前（今年早些时候发布的）有两个编译器：

- full-codegen — 一个简单并且速度非常快的编译器，可以生成简单但相对比较慢的机器码。
- Crankshaft — 一个更加复杂的 (即时) 优化编译器，生成高度优化的代码。



V8 引擎在内部也使用了多个线程：
- 主线程完成你所期望的任务：获取你的代码，然后编译执行
- 还有一个单独的线程用于编译，以便主线程可以继续执行，而前者就能够优化代码
- 一个 Profiler (分析器) 线程，它会告诉运行时在哪些方法上我们花了很多的时间，以便 Crankshaft 可以去优化它们
- 还有一些线程处理垃圾回收扫描

当第一次执行 JavaScript 代码的时候，V8 利用 full-codegen 直接将解析的 JavaScript 代码不经过任何转换翻译成机器码。这使得它可以 非常快速 的开始执行机器码，请注意，V8 不使用任何中间字节码表示，从而不需要解释器。
  当你的代码已经运行了一段时间了，分析器线程已经收集了足够的数据来告诉运行时哪个方法应该被优化。
  然后， Crankshaft 在另一个线程开始优化。它将 JavaScript 抽象语法树转换成一个叫 Hydrogen 的高级静态单元分配表示(SSA)，并且尝试去优化这个 Hydrogen 图。大多数优化都是在这个级完成。

## 引擎行为

1. 解析代码
2. 生成 AST（抽象语法树）（https://astexplorer.net）
3. 执行解释器
4. Profiler 观察，并使用 编译器 优化代码
5. 循环 3，4

## 引擎参考
引擎参考 ECMAScript 规范
https://en.wikepedia.org/wiki/List_of_ECMAScript_engines

## 编译语言和解释语言
- 编译语言先将内容编译为二进制，编译消耗一定时间，但执行快（内部会做优化）。
- 解释语言逐行解释，不需要等待编译，立即开始执行，但执行稍慢。

- 地图软件上，使用解释语言会非常吃力。

- JavaScript v8 结合了编译器和解释器，使用了一种即时编译的技术，即 JIT 编译器。 