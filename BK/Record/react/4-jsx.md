## JSX

#### createElement的问题

1.繁琐不简洁

2.不直观，无法一眼看出所描述的结构

3.不优雅，用户体验不爽



#### 简介

JSX是Java Script XML的简写，表示在JavaScript代码中写XML（HTML）格式的代码。

优势：声明式语法更加直观，与HTML结构相同，降低了学习成本，提升开发效率

<font color=red>JSX是React的核心内容</font>



#### 前置条件

jsx不是标准的ECMAScript语法，它是ECMAScript的语法扩展,jsx需要使用babel转化为js可以识别的内容，webpack内置babel，使用webpack则不用自己添加babel

babel编译JSX语法的包为 @babel/preset-react



#### 注意点

- React元素的属性名使用驼峰命名法

- 特殊属性名：class -> className、for ->htmlFor、tabindex->tabIndex

- 没有内容的标签可以改造为单标签，如<span/>

- 推荐：使用小括号包裹JSX，从而避免JS中自动插入分号陷阱

  ```
  const div=(
  	<div>hello</div>
  )
  ```

  



#### 实例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
    <div id="root"></div>

    <!-- 第一步：导入react，react-dom -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
    <!-- 提供jsx的babel环境 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>

    <!-- script类型改为 text/babel -->
    <script type="text/babel">
        // 2.创建react元素
        const title=<h1>Hello React -- use jsx</h1>;

        // 3.渲染react元素
        // React.render(要渲染的react元素，挂载点)
        ReactDOM.render(title,document.getElementById('root'));
    </script>

</body>
</html>
```

