# webpack 系统学

## 理解

### 基本理解

webpack是一个静态模块打包工具

它会在内部构建一个 依赖图(dependency graph)，此依赖图会映射项目所需的每个模块，并生成一个或多个 bundle文件

区别webpack与webpack-cli

* webpack做js的打包工作
* webpack-cli解析webpack命令, 命令内部使用webpack的功能

webpack不用全局下载, 只需要局部下载即可

* 原因: 公司的多个项目可能使用了不同版本的webpack
* npx webpack 使用局部webpack进行打包（才出来的）
* 使用npm scripts运行的webpack命令默认先找的是局部的webpack

webpack本身能解析打包各种模块规范的JS代码

* ES6、CommonJS、AMD/requirejs、CMD/seajs

核心概念

    模式(mode)
    入口(entry)
    输出(output)
    加载器(loader)
    插件(plugin)

### webpack的常用配置（10个）

* mode 模式，有三个，生产模式带了摇树的功能
* entry
* output
* module 模块加载器，指定loader
* plugins 插件
* devtools 开发工具可以来指定source-map。官方对devtool配置的定义很简单：选择一种 source map 格式来增强调试过程，不同的值会明显影响到构建build和重新构建rebuild的速度。
* devServer 配置开发服务器，代理，路由history404问题，转发
* resolve 模块解析（后缀名可以省略）和起文件别名
* optimization 默认值由模式指定（优化打包的）
* externals=>

webpack 中的 externals 配置提供了不从 bundle 中引用依赖的方式。解决的是，所创建的 bundle 依赖于那些存在于用户环境(consumer environment)中的依赖。

怎么理解呢，意思是如果需要引用一个库，但是又不想让webpack打包（减少打包的时间），并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用（一般都以import方式引用使用），那就可以通过配置externals。

这样做的目的就是将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间，但又不影响运用第三方库的方式，例如import方式等。

### 相关依赖包

### 系列问题

## 处理

## 搭建环境

## 扩展

## 相关理解
