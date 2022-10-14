

# 类型

## 数据类型

**基本数据类型：**

   *   Number（包括 Infinity，-Infinity，NaN）
  *   String
  *   Boolean
  *   Undefined
  *   Null
  *   Symbol(ES2015)
  *   BigInt(ES2020)

**引用数据类型：**

- Object
- Function
- Array



```js
function a() {
  return 5;
}

a.hi = 'hi~';

console.log(a.hi); // undefined
```





## 存储位置（栈，堆）

基本数据类型存储在栈中，变量保存的是栈地址。

引用数据类型存储在堆中，变量指向栈地址，该地址指向堆中数据位置。



## 动态类型和静态类型

- 

JavaScript 是一个动态类型语言（弱类型语言）。



## 判断数据类型

* typeof
* instanceof
* ===
* Object.prototype.toString()
* Array.isArray()
* ...



## 按引用传递 vs 按值传递

- 基本类型：都是按值传递
- 引用类型：
  - 赋值操作：按引用传递
  - 函数参数：按值传递



## null vs undefined

