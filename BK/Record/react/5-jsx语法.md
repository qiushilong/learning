## JSX语法

#### 1.嵌入JS表达式

语法：{JavaScript表达式}

```react
<script type="text/babel">
    let name='Jack';
    let age=23;

    // 嵌入表达式语法
    const title=<h1>{name} -- {age}</h1>;

    ReactDOM.render(title,document.getElementById('root'));
</script>
```



#### 2.条件渲染

```react
    <script type="text/babel">
        const isLoading = true;

        // loadData根据状态返回不同的内容来实现条件渲染
        // 使用if else和三元表达式达到的效果是一样的，&&适合要么隐藏要么显示的效果
        const loadData = () => {
            if (isLoading) {
                return <div>loading...</div>;
            }
            return <div>数据加载完成，加载后的数据：name</div>
        }

        /*
            &&写法
            const loadData = () => {
                    return isLoading && <div>loading...</div>;
            }
        */

        const title = (
            <h1>
                条件渲染：
                {loadData()}
            </h1>
        )

        ReactDOM.render(title, document.getElementById('root'));
    </script>
```



#### 3.列表渲染

```react
    <script type="text/babel">
        const songs=[
            {id:1,name:'痴心绝对'},
            {id:2,name:'像我这样的人'},
            {id:3,name:'南山南'}
        ]

        // 列表渲染需要使用到数字的map()方法
        // 每一个数据都要一个key,key值必须唯一，尽量避免使用索引号作为key
        const title = (
            <ul>
                {songs.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
        )

        ReactDOM.render(title, document.getElementById('root'));
    </script>
```

###### map和forEach的区别：

- map返回一个新的数组，forEach没有返回值

- map和forEach都是为每个元素执行操作

- map运行速度比forEach快

#### 4.样式处理

```react
    <script type="text/babel">

        // h1使用行内样式，行内样式也需要使用驼峰
        // span使用类名，className,推荐使用
        const title = (
            <h1 style={{ color: 'red', backgroundColor: 'skyblue' }}>
                Hello <span className="span">World</span>!
            </h1>
        )

        ReactDOM.render(title, document.getElementById('root'));
    </script>
```

