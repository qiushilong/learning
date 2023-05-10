# tsconfig.json

使用 tsc 命令时，如果运行目录包含 tsconfig.json，会按照 tsconfig.json 来运行。

否则使用默认配置

使用

> tsc --init

可以初始化 tsconfig.json


## 配置字段说明
- compilerOptions: Object
  - noEmitOnError: boolean（默认为 false；ts 打包即使有错误，默认也能生成 js；设置为 true，遇到错误则停止打包）
  - strict: boolean（）
  - target: string（默认为 "ES3"。指定编译后的 js 版本，可选 "es2015" || "ESNext"）
  - noImplicitAny: boolean（默认为 false。是否允许使用 any）
  - strictNullChecks


```json
{
    // 构建选项
    "compilerOptions": {
        // 构建目标
        "target": "ES3",
        // 即使检测到 ts 报错，依旧生成 js
        "noEmitOnError": false,
        // 
        "strict": false,
        // 允许隐式推断为 any 类型的变量（当你没有指定一个类型，并且 ts 无法推断类型时，会隐式推断为 any 类型）
        "noImplicitAny": false,
        // 不严格空检查（可能为空或未定义的值仍然可以访问，并且空和未定义的值可以被分配给 any 类型）
        "strictNullCheck": false
    }
}

```