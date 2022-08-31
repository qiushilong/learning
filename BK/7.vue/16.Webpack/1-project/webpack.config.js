const path = require('path')//导入node.js 中专门操作路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ //创建插件的实例对象
    template: './src/index.html',//指定要用到的模板文件
    filename: 'index.html'//指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    //编译模式
    mode: 'development', //development开发模式,production生产模式
    entry: path.join(__dirname, './src/index.js'),//打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),//输出文件的存放路径
        filename: 'bundle.js'//输出文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    }
}