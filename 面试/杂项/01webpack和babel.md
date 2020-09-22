---
# navbar: false
title: webpack 和 babel
# sidebar: auto
autoPrev: README
autoNext: 1收集一
---

# webpack 和 babel

## webpack 考点梳理

- 基本配置

- 高级配置，多入口，拆除高危代码

- 优化打包效率

- 优化产出代码

- 构建流程概述

- babel

回顾面试题

- 前端代码为何要进行构建和打包？

- module chunk bundle 分别什么意思，有何区别

- loader 和 plugin 的区别

- webpack 如何实现懒加载？

import(url).then(res=>{}),返回一个 promise

- webpack 常见性能优化

- babel-runtime 和 babel-polyfill 的区别

## webpack 基本配置串讲

- 拆分配置和 merge

- 启动本地服务（热部署）

- 处理 ES6

- 处理样式

- 处理图片

- 模块化

## webpack 高级配置

- 多入口

- 抽离 css 文件

- 抽离公共代码

- 懒加载

- 处理 jsx

- 处理 vue

## webpack 如何配置多入口

SPA(single page application)

- 多入口：chunks：['index'] 单独引入

输入 entry、output 设置

## webpack 如何抽离压缩 css 文件

抽离 css：

mini-css-extract-plugin

MiniCSSExtractPlugin.loader=>不用 style.loder

new MiniCSSExtractPlugin({
filename:'css/main.[contentHash:8].css'
})

// 压缩 css

optimization: {
minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
}

## webpack 如何抽离公共代码和第三方代码

```js
    optimization: {
        // 压缩 css
        // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

        // 分割代码块
        splitChunks: {
            chunks: 'all',
            /**
             * initial 入口 chunk，对于异步导入的文件不处理
                async 异步 chunk，只对异步导入的文件处理
                all 全部 chunk
             */

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 0,  // 大小限制
                    minChunks: 1  // 最少复用过几次
                },

                // 公共的模块
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 优先级
                    minSize: 0,  // 公共模块的大小限制
                    minChunks: 2  // 公共模块最少复用过几次
                }
            }
        }
    }
```

## webpack 如何实现异步加载 JS

```js
setTimeout(()={
  //定义chunk
  import(url).then((res) => {});
},1500)
```

## module chunk bundle 的区别

- module-各个源码文件，webpack 中一切皆是模块（面，馅料）

- chunk-多模块合并成的，如 entry，import，splitChunk（大包子）

- bundle-最终的输出文件（塑料袋子）

## webpack 优化构建速度-知识点串讲

- 优化打包构建速度-开发体验和效率

1. 优化 babel-loader

2. IgnorePlugin

3. noParse

4. happyPack

5. ParalleUglifyPlugin

6. 自动刷新

7. 热更新

8. DllPlugin

## 用 IngorePlugin 忽略无用文件

use:['babel-loader?cacheDirectory']=>开启缓存，没有改的代码，就不会重新编译

include/exclude 排除范围

IngorePlugin：时间，语言，本地化的

## happyPack 是什么

1. happypack 多进程打包

- js 单线程，开启多进程打包

- 提高构建速度（特别是多核 cpu）

```js
//rules中里面babel-loader处理js
{
  test: /\.js$/,
  // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
  use: ['happypack/loader?id=babel'],
  include: srcPath,
  // exclude: /node_modules/
},
```

```js
// happyPack 开启多进程打包
    new HappyPack({
        // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
        id: 'babel',
        // 如何处理 .js 文件，用法和 Loader 配置中一样
        loaders: ['babel-loader?cacheDirectory']
    }),
```

2. ParalleUglifyPlugin 多进程压缩 js

- webpack 内置 Uglify 工具压缩 js
- js 单线程，开启多进程压缩更快
- 和 happyPack 同理

```js
// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
new ParallelUglifyPlugin({
  // 传递给 UglifyJS 的参数
  // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
  uglifyJS: {
    output: {
      beautify: false, // 最紧凑的输出
      comments: false, // 删除所有的注释
    },
    compress: {
      // 删除所有的 `console` 语句，可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    },
  },
});
```

关于开启多进程！！！

- 项目较大，打包较慢，开启多进程能提高速度

- 项目较小，打包很快，开启多进程会降低速度（进程开销）

- 按需开启

## webpack 如何配置热更新

自动刷新=>watch（不用配置，devServer 默认配置上了）和热更新不同，整个网页全部刷新，速度慢，状态也会丢失

热更新=>新代码生效，网页不刷新，状态不丢失

```js
//导入
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");

//入口修改
entry: {
    // index: path.join(srcPath, 'index.js'),
    index: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
        path.join(srcPath, 'index.js')
    ],
    other: path.join(srcPath, 'other.js')
},
//使用
new HotModuleReplacementPlugin()
//配置
devServer: {
    port: 8080,
    progress: true,  // 显示打包的进度条
    contentBase: distPath,  // 根目录
    open: true,  // 自动打开浏览器
    compress: true,  // 启动 gzip 压缩
    hot: true,
    // 设置代理
    proxy: {
        // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
        '/api': 'http://localhost:3000',

        // 将本地 /api2/xxx 代理到 localhost:3000/xxx
        '/api2': {
            target: 'http://localhost:3000',
            pathRewrite: {
                '/api2': ''
            }
        }
    }
},

```

`下面我单独拎出来，解答了我疑惑，为什么热更新不对劲，只有在监听范围内的代码才能达到热更新，热更新是不改变状态的，有时候修改了js代码，但修改的代码不在管理范围内，那么会自动刷新，虚假的热更新，页面被刷新了，状态也被修改了。好东西是需要付出代价的，如果项目小，或者自动刷新功能满足了开发要求，就不用这么配置。多做一件事，就多一分犯错误的风险和烦恼。`

```js
// 增加，开启热更新之后的代码逻辑
if (module.hot) {
  module.hot.accept(["./math"], () => {
    const sumRes = sum(10, 30);
    console.log("sumRes in hot", sumRes);
  });
}
```

## 何时使用 DllPlugin

DllPlugin 动态链接库插件

- 前端框架 vue，react，体积大，构建慢

- 稳定，不常升级版本

- 同一版本只构建一次即可，不用每次都重新构建

- webpack 内置 DllPlugin

- DllPlugin-打包出 dll 文件

- DllReferencePlugin - 使用 dll 文件

。。。。。。这配置，我这小破脑袋，记也记不住啊~~

## webpack 优化构建速度-考点总结和复习

1. 可用于生产环境下的

- 优化 babel-loader（缓存，排除范围）
- IgnorePlugin
- noParse

  ```js
  //忽略解析第三方库
  module: {
    noParse: "/jquery|lodash/";
  }
  ```

- happyPack
- ParallelUglifyPlugin

2. 不能用于生产环境下的

- 自动刷新
- 热更新
- DllPlugin

## webpack 优化产出代码-考点串讲

- 体积更小
- 合理分包，不重复加载
- 速度更快，内存使用更少

措施

- 小图片 base64 编码
- bundle 加 hash=>contenthash
- 懒加载 import 语法=>比较大的文件（vue 的组件、路由的异步加载一个道理）
- 提取公共代码=>splitChunks 拆包
- IngorePlugin=>忽略第三方包指定目录，让这些指定目录不要被打包进去
- 使用 CDN 加速。。。输出路径添加公共 CNDpath=>publicPath
- production
- Scope Hosting（改变作用域，代码执行快，内存占用少）

## 什么是 Tree-Shaking

mode:'production' 的作用

- 自动开启代码压缩
- vuereact 等会自动删除调式代码，比如开发环境 warning
- 启动 Tree-Shaking=>抖落树，排除无用的代码（必须用 es6 才能生效，commonjs 不行）

## ES6 Module 和 Commonjs 的区别

- ES6 Module 静态引用，编译时引用
- Commonjs 动态引用，执行时引用
- 只有 ES6 Module 才能静态分析，实现 Tree-Shaking

   <img :src="$withBase('/面试/ES6Module和Commonjs 的区别.png')">

## 什么是 Scope Hosting

- 代码体积更小
- 创建函数作用域更小
- 代码可读性更好

 <img :src="$withBase('/面试/Scope Hosting.png')">

这是 webpack 的默认行为，当打包前会简化代码，再塞入打包，是自带优化功能之一。PS，怎么回事？怎么网上说的不一样？一个说要手动配置，一个说不用？一会 look look

## babel 基本概念串讲

- 环境搭建&基本配置

  - npm cli、core、preset-env、plugin-tansform-runtime、polyfill、runtime

  - .babelrc 配置

  - preset-env 预设，plugins 就不用写那么多，插件的组合

- babel-polyfill
- babel-runtime

## babel-polyfill 是什么

- polyfill=>补丁=>新语法不支持，只能找补丁打上来保证兼容
- core-js （标准库）和 regenerator（填补一下生成器函数 yield 等）
- babel-polyfill 上面的集合。。。已经在 7.4 版本弃用

- babel 只是让语法符合 ES5 的语法规范（import '@babel/polyfill'），并不处理模块化，这个交给 webpack 处理

## babel-polyfill 如何按需引入

问题

- 文件大
- 只有一部分功能，无需全部引入
- 按需引入

删除入口的 import

```js
"presets": [
    [
        "@babel/preset-env",
        {
            "useBuiltIns": "usage",
            "corejs": 3
        }
    ]
],
```

讲了许多背景，不用安装 babel-polyfill，直接用 corejs 了

## babel-runtime 是什么

babel-polyfill 的问题

- 污染全局环境，因为他会挂载到全局上。做三方库，会出问题

```js
//默认配置就行了
"plugins": [
    [
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }
    ]
]
```

## webpack 考点总结和复习

- 基本配置

  - 拆分配置和 merge
  - 启动本地服务
  - 处理 es6
  - 处理样式
  - 处理图片

- 高级配置

  - 多入口
  - 抽离 css 文件
  - 抽离公共代码
  - 懒加载
  - 处理 jsx
  - 处理 vue

- 优化打包效率(构建速度)

  - `可用于生产环境`

  - 优化 babel-loader
  - IgnorePlugin
  - noParse
  - happyPack
  - ParallelUglifyPlugin

  - `不用于生产环境`

  - 自动刷新
  - 热更新
  - DllPlugin

- 优化产出代码

  - 小图片 base64 编码
  - bundle 加 hash
  - 懒加载
  - 提取公共代码
  - 使用 CDN 加速
  - IngorePlugin
  - 使用 production
  - Scope Hosting

- 构建流程概述
- babel
  - 环境搭建&基本配置
  - babelPolyfill（corejs）
  - babel-runtime

## webpack 面试真题-前端代码为何要打包和构建？

和代码相关

- 体积更小（Tree-Shaking、压缩、合并），加载更快
- 编译高级语言或语法（TS,ES6+,模块化，scss）
- 兼容性和错误检查（polyfill，postcss，eslint）

研发流程层面

- 统一、高效的开发环境
- 统一的构建流程和产出的标准
- 集成公司构建规范（提测，上线等）

## module chunk bundle 的区别

- module-各个源码文件，webpack 中一切皆是模块（面，馅料）

- chunk-多模块合并成的，如 entry，import，splitChunk（大包子）

- bundle-最终的输出文件（塑料袋子）

## loader 和 plugin

- loader 模块转换器，如 less=>css
- plugin 扩展插件，如 HtmlWebpackPlugin

## 常见 loader 和 plugin

webpack 官网链接

## babel 和 webpack 的区别

- babel-js 新语法编译工具，不关心模块化
- webpack-打包构建工具，是多个 loader 和 plugin 的集合。能做什么看配置

## 如何产出一个 lib

 <img :src="$withBase('/面试/如何产出一个lib.png')">

## babel-polyfill 和 babel-runtime 的区别

- babel-polyfill 会污染全局

- babel-runtime 不会污染全局

- 产出第三方 lib 要用 babel-runtime

## webpack 如何实现懒加载

- import（）

- 结合 vue react 异步组件

- 结合 vue-router、react-router 异步加载路由

## webpack 面试真题-为何 Proxy 不能被 Polyfill

- 如 class 可以用 function 模拟

- promise 可以用 callback 来模拟

- proxy 的功能无法被 Object.defineProperty 模拟

## webpack 面试真题-常见性能优化方法（再来一遍）

- 优化打包效率(构建速度)

  - `可用于生产环境`

  - 优化 babel-loader
  - IgnorePlugin
  - noParse
  - happyPack
  - ParallelUglifyPlugin

  - `不用于生产环境`

  - 自动刷新
  - 热更新
  - DllPlugin

- 优化产出代码

  - 小图片 base64 编码
  - bundle 加 hash
  - 懒加载
  - 提取公共代码
  - 使用 CDN 加速
  - IngorePlugin
  - 使用 production
  - Scope Hosting
