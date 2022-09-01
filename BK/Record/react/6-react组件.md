## React组件

#### 简介

- 组件是React的一等公民，使用React就是在用组件
- 组件表示页面中的部分功能
- 组合多个组件实现完整页面的功能
- 特点：可复用、独立、可组合



#### 创建方式

##### 1.使用函数创建组件

- 函数组件：使用JS的函数（或箭头函数）创建的组件
- 约定1：函数名称必须<font color=red>以大写字母开头</font>
- 约定2：函数组件<font color=red>必须有返回值</font>,表示该组件的结构
- 如果返回值为null，表示不渲染任何内容

```react
    <script type="text/babel">
        function Hello(){
            return(
                <h1>函数组件</h1>
            )
        }

        ReactDOM.render(<Hello/>, document.getElementById('root'));
    </script>
```





##### 2.使用类创建组件

- 类组件：使用ES6的class创建的组件
- 约定1：类名称必须<font color=red>以大写字母开头</font>
- 约定2：类组件必须继承<font color=red>React.Component</font>，从而可以使用父类中提供的属性和方法
- 约定3：类组件必须提供<font color=red>render()</font>方法
- 约定4：render()方法<font color=red>必须有返回值</font>,表示该组件的结构

```react
    <script type="text/babel">
        class Hello extends React.Component{
            render(){
                return(
                    <h1>类组件</h1>
                )
            }
        }

        ReactDOM.render(<Hello/>, document.getElementById('root'));
    </script>
```



#### 函数组件和类组件

函数组件又叫<font color=red>无状态组件</font>，类组件又叫<font color=red>有状态组件</font>

状态（state）即<font color=red>数据</font>

函数组件没有自己的状态，<font color=red>只负责数据展示</font>（静态）

类组件有自己的状态，<font color=red>负责更新UI</font>，让页面“动”起来
