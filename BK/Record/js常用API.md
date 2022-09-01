## js数据类型

基本数据类型（8种） USONB

undefined	string	symbol	object	number  null   boolean	bigint

引用数据类型（3种）

function	array	object



####  Number API

| API                      | 介绍                                |
| ------------------------ | ----------------------------------- |
| isNaN()                  | 判断值是否为NaN                     |
| isFinite()               | 判断值是否为有限数                  |
| isInteger()              | 判断值是否为number类型的整数        |
| parseFloat()             | 解析值成为一个浮点数                |
| parseInt(string[,radix]) | 按radix进制解析值成为一个十进制整数 |

##### parseInt(string[,radix])

string以0X，0x开头会被按照16进制去解析，以0开头会按8进制去解析。

parseInt(0.0000000678)会将0.0000000678处理为6.78e-8，从而使结果为6。

['1','2','3'].map(parseInt)的结果是[parseInt('1',0),parseInt('2',1),parseInt('3',2)]，即[1,NaN,NaN]。

##### parseFloat(string)

string在去除首尾空格后进行解析，当遇到第二个小数点停止。

第一个非空字符不能被解析成数字，则返回NaN。

parseFloat可以解析Infinity并返回Infinity。

parseFloat可以解析BigInt，返回Number类型，丢失精度。



#### String API

| API           | 介绍                                                   |
| ------------- | ------------------------------------------------------ |
| charAt()      | 返回指定位置的字符                                     |
| concat()      | 将一个或多个字符串和原字符串连接，返回新的字符串       |
| endsWith()    | 判断当前字符串是否是以给定字符串结尾                   |
| startWith()   | 判断当前字符串是否是以给定字符串开头                   |
| includes()    | 判断当前字符串是否包含给定字符串                       |
| indexOf()     | 返回给定字符串在当前字符串首次出现的位置，未出现返回-1 |
| lastIndexOf() | 返回给定字符串在当前字符串最后出现的位置，未出现返回-1 |
| match()       | 检索返回一个字符串匹配正则表达式的结果                 |
| matchAll()    | 检索返回一个所有匹配正则表达式的迭代器                 |
| repeat()      | 构造并返回一个新字符串                                 |
| replace()     | 返回一个按正则替换后的字符串                           |
| replaceAll()  | 替换所有匹配的字符串                                   |
| trim()        | 去除字符串两端空格                                     |
| valueOf()     | 返回字符串对象的原始值                                 |
| slice()       | 截取字符串，左闭右开                                   |
| split()       | 按指定分隔符分割字符串，返回数组                       |
| substring()   | 截取字符串                                             |



#### Array API

| API                           | 介绍                                           |
| ----------------------------- | ---------------------------------------------- |
| push()                        | 在数组末尾添加元素                             |
| pop()                         | 删除并返回最后一个元素                         |
| shift()                       | 删除并返回最后一个元素                         |
| unshift()                     | 在数组头部添加元素                             |
| concat()                      | 连接两个数组，现在常用...运算符                |
| splice(index[,count,...item]) | 从index开始删除count个元素，并插入新的元素     |
| slice()                       | 截取数组                                       |
| reverse()                     | 颠倒数组中的元素顺序                           |
| sort()                        | 按自定义函数排序数组                           |
| join()                        | 按特定符号连接数组成为字符串                   |
| indexOf()                     | 从指定位置开始查找特定的元素，找不到返回-1     |
| lastIndexOf()                 | 从指定位置开始逆序查找特定的元素，找不到返回-1 |
| every                         | 如果该函数对每一项都返回true，则返回true       |
| filter                        | 返回值为true的所有元素组成的数组               |
| forEach                       | 无返回值，为所有元素执行一个函数               |
| map                           | 返回每次函数调用的结果组成的数组               |
| some                          | 由任意一项返回true，则返回true                 |
| reduce                        | 从数组起始位置开始遍历                         |
| reduceRight                   | 从数组末尾开始遍历                             |



#### 特殊值

NaN，Infinity，undefined，null



#### 0.3 - 0.2 ! == 0.1

0.3和0.2在计算机中会转为2进制保存，而0.3使用二进制保存无法整除，多余数据会进行截取，0.3和0.2的二进制都超出了计算精度，导致最后0.3-0.2的到的结果是0.09999999999999998，不等于0.1。



#### undefined和null

typeof undefined 的结果是undefined。

typeof null 的结果是object。

null==undefined的结果是true。

null===undefined的结果是false。



#### Function

| API                                 | 介绍                               |
| ----------------------------------- | ---------------------------------- |
| func.call([thisArg,],arg1,arg2,...) | 调用函数，传入的是参数序列         |
| func.apply([thisArg],argsArray)     | 调用函数，传入的是参数数组或类数组 |
| func.bind()                         |                                    |

**this 永远指向最后调用它的那个对象**

**箭头函数的 this 始终指向函数定义时的 this，而非执行时。**

##### 改变this指向：

- ES6的箭头函数
- _this=this
- apply，call，bind
- new 实例化一个对象

call和apply会比直接调用函数更加灵活。
