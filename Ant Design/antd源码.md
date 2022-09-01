### React.forwardRef

https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref



### React.Context 和 React.useContext

https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext



### mixins

https://less.bootcss.com/#%E6%B7%B7%E5%90%88mixins



### scss、sass、less的区别



### 问题1：打包后类名变化，导致使用classnames包不能加上className

原因：使用module的css时，打包为了类名局部生效，不污染其他内容，所以打包时类名变化了。

方法一：使用全局的css样式，自己通过添加前缀来实现不重合，不污染。

方法二：styles得到的是原始类名和打包后类名的映射关系。



### ts中任意属性名的写法

```ts
[propsName:string]:string
```

### css中+和~选择器

| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp) | div + p | 选择所有紧随 <div> 元素之后的 <p> 元素。 |
| ------------------------------------------------------------ | ------- | ---------------------------------------- |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) | p ~ ul  | 选择前面有 <p> 元素的每个 <ul> 元素。    |



### preventDefault，stopPropagation

https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault



### TS不常见类型如何写



### TS的Partial



### React.useMemo

https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo