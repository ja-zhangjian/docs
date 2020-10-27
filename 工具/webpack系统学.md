---
# navbar: false
# title: 关于我
# sidebar: auto
sidebarDepth: 2
---

# webpack 系统学

## 理解

### 基本理解

webpack 是一个静态模块打包工具

它会在内部构建一个 依赖图(dependency graph)，此依赖图会映射项目所需的每个模块，并生成一个或多个 bundle 文件

区别 webpack 与 webpack-cli

- webpack 做 js 的打包工作
- webpack-cli 解析 webpack 命令, 命令内部使用 webpack 的功能

webpack 不用全局下载, 只需要局部下载即可

- 原因: 公司的多个项目可能使用了不同版本的 webpack
- npx webpack 使用局部 webpack 进行打包（才出来的）
- 使用 npm scripts 运行的 webpack 命令默认先找的是局部的 webpack

webpack 本身能解析打包各种模块规范的 JS 代码

- ES6、CommonJS、AMD/requirejs、CMD/seajs

核心概念

    模式(mode)
    入口(entry)
    输出(output)
    加载器(loader)
    插件(plugin)

### webpack 的常用配置（10 个）

- mode 模式，有三个，生产模式带了摇树的功能
- entry
- output
- module 模块加载器，指定 loader
- plugins 插件
- devtools 开发工具可以来指定 source-map。官方对 devtool 配置的定义很简单：选择一种 source map 格式来增强调试过程，不同的值会明显影响到构建 build 和重新构建 rebuild 的速度。
- devServer 配置开发服务器，代理，路由 history404 问题，转发=>historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
- resolve 模块解析（后缀名可以省略）和起文件别名
- optimization 默认值由模式指定（优化打包的）
- externals=>

webpack 中的 externals 配置提供了不从 bundle 中引用依赖的方式。解决的是，所创建的 bundle 依赖于那些存在于用户环境(consumer environment)中的依赖。

怎么理解呢，意思是如果需要引用一个库，但是又不想让 webpack 打包（减少打包的时间），并且又不影响我们在程序中以 CMD、AMD 或者 window/global 全局等方式进行使用（一般都以 import 方式引用使用），那就可以通过配置 externals。

这样做的目的就是将不怎么需要更新的第三方库脱离 webpack 打包，不被打入 bundle 中，从而减少打包时间，但又不影响运用第三方库的方式，例如 import 方式等。

### 相关依赖包

webpack

    webpack
    webpack-cli
    webpack-dev-server
    webpack-merge
    cross-env 环境变量的设置

loader

    css-loader
    style-loader

    postcss-loader：autoprefixer 、postcss-px2rem

    less-loader：less
    stylus-loader：stylus
    sass-loader：node-sass

    file-loader
    url-loader

    image-webpack-loader（压缩图片，不影响显示效果）

    babel-loader
        @babel/core
        @babel/preset-env
        @babel/preset-react
        @babel/polyfill
        @babel/plugin-transform-runtime
        @babel/runtime

    vue-loader 记得配置plugin

    eslint-loader
        eslint
        babel-eslint
        eslint-friendly-formatter
        eslint-plugin-vue
        eslint-plugin-react

    MiniCssExtractPlugin.loader（抽离css）

    thread-loader（多线程打包）

plugin

    html-webpack-plugin（把打包的js、css自动引入到html中）
    clean-webpack-plugin@1.0.1（清除打包文件，这个版本可以清除特定文件的）
    mini-css-extract-plugin（包含上面的loader）
    optimize-css-assets-webpack-plugin（压缩css）
    copy-webpack-plugin（拷贝文件）
    terser-webpack-plugin（压缩js）
    add-asset-html-webpack-plugin
    webpack-bundle-analyzer（分析打包文件）
    webpack.ProgressPlugin（打包进度的）
    webpack.HotModuleReplacementPluginRemo（热模替换的）
    webpack.HashedModuleIdsPlugin 模块ID用hash值
    webpack.DllPlugin 多进程打包
    webpack.DllReferencePlugin
    new webpack.ProvidePlugin

### 系列问题

    区别wepack的2个工具包: webpack与webpack-cli?
    为什么建议不要全局下载webpack工具包?
    如何解决webpack命令不能识别的问题?
    webpack的10大配置选项
    webpack中常用10个的loader
    webpack中常用5个plugin
    为什么要使用html-webpack-plugin?
    为什么要使用clean-webpack-plugin?
    区别css-loader和style-loader?
    区别url-loader和file-loader?
    webpack-dev-server用来做什么?
    说说热模替换(HMR)的理解?
    说说代理服务器的理解?
    说说history路由404问题?
    @babel/preset-env能干什么? 不能干什么? 如何解决?
    直接使用@babel/polyfill有什么问题, 如何解决?
    如何实现@babel/polyfill的按需打包
    如何对css进行单独打包和压缩
    postcss是什么?
    autoprefixer用来做什么的?
    postcss-px2rem用来做什么的?

## 处理

### loader 处理

1. 打包 JS

[Babel 7 升级实践](https://blog.hhking.cn/2019/04/02/babel-v7-update/)

- 相关的包

<img :src="$withBase('/工具/webpack/相关的包.png')">

- 基础配置

```js
{
    test: /\.js$/,
    use: ['babel-loader'],
    include: [resolve('src')]
 },
//babel.config.js
 module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
}
```

- 方案一

```js
import '@babel/polyfill'
{
      "useBuiltIns": false, // 默认值, polyfill全部引入打包
 }
 问题: 全部打包
```

- 方案二

```js
{
  "targets": {
    "edge": 70,
    // "ie": 10,
    "chrome": 67
  },
  "useBuiltIns": "entry",
  "corejs": 2,
}
//特点: 根据targets配置的浏览器版本引入不兼容的打包
//问题: 项目中只使用了部分需要polyfill的新API
```

- 方案三

```js
{
  useBuiltIns: 'usage',
  corejs: 2,
  targets: {
    ie: 9,
    // edge: 70,
    chrome: 67
  }
}
//特点: 只打包使的新API的polyfill=>不需要手动引入polyfill=>打包文件更小
//问题: polyfill辅助函数是在每个模块中内置定义的, 很可能重复定义了
```

- 方案四

```js
plugins: ["@babel/plugin-transform-runtime"];
//问题: _classCallCheck 辅助函数是直接内嵌的，
//如果多个地方使用 Class，那每个地方都会添加这个辅助函数，大量重复
//解决: 引入单独helpers定义的辅助函数, 不再产生重复定义的多余代码
```

- 最终配置

```js
module.exports = function(api) {
  api.cache(true); // 内部做缓存处理, 加快babel打包

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 2,
        targets: {
          ie: 9,
          // edge: 70,
          chrome: 67,
        },
      },
    ],
  ];

  const plugins = ["@babel/plugin-transform-runtime"];

  return {
    presets,
    plugins,
  };
};
```

2.  打包图片

- 相关的包

  - file-loader
  - url-loader
    依赖于 file-loader、针对小图片可以进行 base64 处理, 减少请求
  - image-webpack-loader

- 打包图片和 Base64 编码

```js
{
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024*5, //把小于 5kb 的文件转成 Base64 的格式
              name: 'img/[name].[ext]', // 内变化hash变化
            }
          }
        ]
}
//好处: 减少对图片请求的数量
//不好: 打包文件变大
```

- 图片压缩

```js

    {
      loader: 'image-webpack-loader',
      options: {
        // 压缩 jpg/jpeg 图片
        mozjpeg: {
          progressive: true,
          quality: 65 // 压缩率
        },
        // 压缩 png 图片
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        }
      }
    }
```

::: tip 吐槽
image-webpack-loader,这个我一定要说一下，尽管效果很厉害，我测试压缩能达到一半的压缩率，但是下不来很难受,解决就是 cnpm，阿里的镜像。

[webpack 图片压缩 image-webpack-loader 无法安装或安装卡死的解决办法](https://my.oschina.net/itlangz/blog/1921136)
:::

3.  打包字体

```js
{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
},
```

4.  打包音视频

```js
{
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
},
```

5.  打包样式

- 相关包
  - css-loader
  - style-loader
  - postcss-loader
  - autoprefixer
  - postcss-px2rem
  - less & less-loader
  - stylus & stylus-loader
  - node-sass & sass-loader
  - mini-css-extract-plugin
  - optimize-css-assets-webpack-plugin
- css

```js
//css-loader & style-loader
{
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
}
```

- css 预编译器

- less

```js
//less & less-loader
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'less-loader'
  ]
}
```

- stylus

```js
//stylus & stylus-loader
{
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'stylus-loader'
  ]
}
```

- sass

```js
//node-sass & sass-loader
//注意: node-sass下载很可能失败, yarn < npm < cnpm
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ]
}
```

- Postcss

  - 理解

  <img :src="$withBase('/工具/webpack/postcss理解.png')">

  - 使用

    - 依赖包

    postcss-loader、内部依赖 postcss

    - postcss 的插件
      autoprefixer、postcss-px2rem

```js
//webpack.config.js
["style-loader", "css-loader", "postcss-loader"];
//postcss.config.js
module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("postcss-px2rem")({
      unitRem: 37.5,
    }),
  ],
};
```

- 移动端适配

postcss-pxtorem、lib-flexible

- 抽离，单独打包 css

mini-css-extract-plugin

MiniCssExtractPlugin.loader

new MiniCssExtractPlugin({
filename: 'static/css/[name].[contenthash:8].css',
})

```js
//处理样式
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader", "postcss-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(styl|stylus)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
      },

      new MiniCssExtractPlugin({
filename: 'static/css/[name].[contenthash:8].css',
})
```

- 压缩 css

optimize-css-assets-webpack-plugin

```js
optimization: {
  minimizer: [new OptimizeCSSAssetsPlugin()];
}
```

- css 模块化

```js
{
	loader: 'css-loader',
	options: {
		importLoaders: 2, // 后面有2个loader
		modules: true // 使用css进行模块处理 --> 只影响指定元素样式
	}
}
//好处: 终结CSS全局变量
```

6.  代码规范检查

这个回头整理

### plugin 处理

<img :src="$withBase('/工具/webpack/plugin.png')">

### devtool

<img :src="$withBase('/工具/webpack/devTool.png')">

### devServer

<img :src="$withBase('/工具/webpack/devServer1.png')">

<img :src="$withBase('/工具/webpack/devServer2.png')">

## 搭建环境

- 基础环境
- vue 环境

## 优化

## 扩展

## 相关理解

- 包版本

      	版本号: 1.2.3
      		1: 主版本号
      		2: 次版本号
      		3: 补丁版本号
      	版本升级
      		补丁版本: 修复一些小bug, 变化不大
      		次版本号: 做了一些较大的改动
      		主版本号: 做了特别大的改动
      	区别^与~
      		^1.2.3
      			下载的包的次版本号可以是大于2的最新版本
      		~1.2.3
      			下载的包的补丁版本号可以是大于3的最新版本
      	package-lock.json/yarn.lock的作用
      		锁定当前下载的依赖的精确版本, 避免前后下载包的版本不完全一致的问题
      		git时不能忽略, 保存其他人clone后下载的依赖与当前一致
