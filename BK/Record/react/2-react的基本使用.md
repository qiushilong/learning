## React的基本使用

#### 1.安装依赖包

最基本依赖包有react和react-dom，可以使用npm或者yarn安装

#### 2.引入依赖包

```js
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```

#### 3.创建React元素

```js
const title=React.createElement('h1',{title:'标题'},'Hello React');
```



#### 4.渲染React元素到页面中

```js
ReactDOM.render(title,document.getElementById('root'));
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

    <script>
        // 2.创建react元素
        // React.createElement(元素名称，元素属性对象或者null，元素的子节点)
        // 使用createElement方法在嵌套是不友好，会导致结构不清晰，不推荐使用
        const title=React.createElement('h1',{title:'标题'},'Hello React');

        // 3.渲染react元素
        // React.render(要渲染的react元素，挂载点)
        ReactDOM.render(title,document.getElementById('root'));
    </script>

</body>
</html>
```

