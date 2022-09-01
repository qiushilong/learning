## Context

作用：跨组件传递数据

#### 使用步骤

1.调用React.createContet() 创建Provider（提供数据）和Consumer（消费数据）两个组件。

2.调用Provider组件作为父节点

3.设置value属性，表示要传递的数据

4.使用Consumer组件接收数据



```js
	<script type="text/babel">

    // 1.创建context得到两个组件
    const { Provider, Consumer } = React.createContext();

    class App extends React.Component {
      render() {
        return (
          // 2.使用Provider提供数据
          <Provider value="pink">
            <div>
              <Node />
            </div>
          </Provider>
        )
      }
    }

    const Node = props => {
      return (
        <div>
          <SubNode />
        </div>
      )
    }

    const SubNode = props => {
      return (
        <div>
          {/* 3.使用Consumer接收数据 */}
          <Consumer>
            {data => <span>内容:{data}</span>}
          </Consumer>
        </div>
      )
    }

    ReactDOM.render(<App />, document.getElementById('root'))

  </script>
```

