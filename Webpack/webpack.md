# webpack

*webpack* 是一个现代  JavaScript 应用程序的*静态模块打包器(module bundler)*。当 webpack 处理应用程序时，它会递归地构建一个*依赖关系图(dependency graph)*，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 *bundle*。

## 核心概念

- entry：指示 webpack 应该使用哪个模块，来作为构建其内部*依赖图*的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
- output：告诉 webpack 在哪里输出它所创建的 *bundles*，以及如何命名这些文件。
- loader：让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
- plugins：用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。
- mode：development | production。

## Entry

**分类：**

- 单入口
- 多入口

**语法：**

entry: string | string[] | { [chunkName: string]: string | string[] }

```js
// string
entry: './src/index.js'

// string[]
entry: ['./src/index.js', './src/app.js']

// Object
entry: {
  main: './src/main.js',
  app: './src/app.js'
}
```

## Output

**语法：**

{ filename: string, path: string }

```js
// 单入口
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

// 多入口
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist')
}
```

## Mode

**语法：**

'development' | 'production'

```js
mode: 'development'
```

**从 CLI 参数传递：**

webpack --mode=production

**选项含义：**

| **选项**    | **描述**                                                     |
| ----------- | ------------------------------------------------------------ |
| development | 会将 `process.env.NODE_ENV` 的值设为 `development`。启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`。 |
| production  | 会将 `process.env.NODE_ENV` 的值设为 `production`。启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`. |

