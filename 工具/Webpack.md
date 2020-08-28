---
 sidebarDepth: 2
---
# Webpack4.0
webpack是js应用的静态模块打包工具

模块+打包

前端模块化：AMD、CMD、CommonJS、ES6

依赖于node

PS:不说这个开发时依赖的，是真的坑人，乐色。

```sh
npm i webpack webpack-cli -D 
//等价于下面的
npm install webpack webpack-cli --save-dev
```
终端执行的webpack都是全局的

script里面的脚本，优先用本地的(npm run build)

webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
## loader 
### css-loader
```sh
npm install --save-dev css-loader
```
但是还需要install style-loader
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```
style-loader，负责将样式添加到DOM中，开发时依赖
css-loader ,只负责加载不负责解析，属于开发时依赖
多个loader时，由下到上解析，层层传递

### less-loader
```sh
npm install --save-dev less-loader less
```
less-loader是需要less作为peerDependency，这样就能精准做版本控制
那么什么是peerDependency?这个合成词是同等依赖，ok，够蠢的，
npm的官网的举例，也是云里雾里的
简言之就是less是JQ，less-loader就是JQUI，没less这个核心依赖就不行，不信你不安装less试试。有个关于vue-loader的解释，比较恰当

> 关于vueloader的配置问题
>1. 你应该将 `vue-loader` 和 `vue-template-compiler` 一起安装
>2. 每个 `vue` 包的新版本发布时，一个相应版本的 `vue-template-compiler` 也会随之发布。编译器的版本必须和基本的 `vue` 包保持同步，这样 `vue-loader` 就会生成兼容运行时的代码。这意味着你每次升级项目中的 `vue` 包时，也应该匹配升级 `vue-template-compiler`。

PS：我说实话，让小白来看文档的人，让你家小孩上来就学逍遥游，是不是傻

```javascript
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    }
};
```
>英文文档下面还有讲解的，看不懂了，留坑



###  stylus-loader 

听说这个很好用，确实也很好用，但是好用的东西，就是新的，新的东西资料不完整
```sh
npm install --save-dev stylus-loader  stylus
```
```javascript
 {
        test: /\.styl(us)?$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "stylus-loader" // compiles stylus to CSS
        }]
      },
```

### url-loader 图片处理
联想background 的url
```sh
npm install --save-dev url-loader
```
```javascript
{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hsah:8].[ext]'
            }
          }
        ]
      }
```
看起来没问题，但是这个设置了options的限制，它只能处理小于这个字节的图片并且返回DataUrl（base64），好处就是减少小图片的请求处理，加快http请求（1.1仍是串行）

img:文件打包到的文件夹

name：文件原名字

hash：8=>根据文件内容生成的8位hash值

ext：原文件的扩展名
### file-loader
```sh
npm install --save-dev file-loader
```
```javascript
{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
            }
          
        ]
      }
```
自己练习显示不出来，就是路径问题
webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
    publicPath:'dist/'//修正输出的file文件的路径，一定要看清楚，如果是连html也打包，就不需要了
  }
};
```
### babel-loader
```sh
npm install babel-loader babel-core babel-preset-env
```
loader 核心 环境
```javascript
 {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
```
这个是中文官网的，但是run的时候报错，让我是没想到的，提示需要安装

好像是webpack3与4导入的差别，找了半天没有具体详解
 @babel/core

 @babel/preset-env

 下面是英文文档的
 ```sh
 npm install -D babel-loader @babel/core @babel/preset-env webpack
 ```

```javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
> 一手文档非常重要，但是我的网是真的卡

