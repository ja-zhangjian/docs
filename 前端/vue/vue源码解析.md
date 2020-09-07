---
title: Vue源码解析
# autoPrev: README
sidebarDepth: 1
---

# Vue.js 源码全方位深入解析（vue-v2.5.17-beta.0）

> 写在前面，看大神解析做的笔记，说实话，不一定能看完，我尽量吧，就怕不消化。我现在就知道数据劫持和发布订阅者模式，读 vue3 源码还要学 TS。慢慢来，慢慢来。

## 准备工作

### 简介

核心：数据驱动、组件化、响应式原理 （1-4 章）

编译：parse、optimize、codegen（5 章）

扩展：event、v-model、slot、keep-alive、transition（6 章）

生态：Vue-Router、Vue-X（7、8 章)

### 准备工作

前提：熟练 vue，原生 js 功底、数据结构、正则、调试 debugger

### 认识 Flow

flow：js 静态类型检查工具

类型推断、类型注释

libdef
### 目录设计
src
├── compiler        # 编译相关 
├── core            # 核心代码 
├── platforms       # 不同平台的支持
├── server          # 服务端渲染
├── sfc             # .vue 文件解析
├── shared          # 共享代码
### 源码构建
基于rollup，适合库的构建

runtime only 轻量（运行时不带编译）推荐

runtime+compiler （运行时编译）重点分析
### 入口开始
入口：src/platforms/web/entry-runtime-with-compiler.js

vue=>index.js=>core/index.js=>instance/index.js

通过function构建vue，为什么不用class？（ES5和ES6）=>ES5好拆分，好维护

## 数据驱动
### 数据驱动
视图由数据驱动生成，不会直接操作DOM，更多关心数据的修改。DOM变成数据的映射。

数据更新驱动视图的变化。
### new Vue 发生了什么试看
init方法=>合并options=>\_data的proxy=>$mount挂载（中间还有分支逻辑）
### Vue 实例挂载的实现
el的判断，不能挂载到html或者body（会覆盖），所以通常挂载到div上面

template的判断

updateComponent
### render
Vue的私有方法，render方法生成VNode，根节点只有一个VNode（虚拟dom）
### Virtual DOM
用原生的js对象去描述一个dom节点，定义在vnode.js中

Virtual DOM除了它的数据结构的定义，映射到真实的DOM实际上还要经历VNode的create、diff、patch等过程
### createElement
回忆一下render方法，分两种，一种是template申明，一种是手写render方法，这两种都会调用createElement方法，区别是六号位的参数是false和true

过滤参数，参数量不一致，处理上移，再执行私有的\_createElement

拍平成为一维VNode数组（简单的，复杂的=>递归）
### update
把VNode映射成真实DOM

patch在浏览器中调用=>createPatchFunction（实际的dom操作、dom上面属性的钩子函数）

函数柯里化的技巧，因为需要多平台运行，参数复用，在执行patch之前抹平差异。

替换原有的节点

newVue=>init=>$mount=>compile=>render=>vnode=>patch=>DOM
## 组件化
### 组件化
组件是资源独立的，可复用，可嵌套
### createComponent
构造子类构造函数、安装组件钩子函数和实例化vnode
### patch（上）
>好家伙，给我看困了，我中午可是喝了两大杯浓茶的，咋回事呢

组件patch
### patch（下）
### 合并配置（上）
### 合并配置（下）
### 生命周期
### 组件注册（上）
### 组件注册（下）
### 异步组件（工厂函数）
### 异步组件（Promise）
### 异步组件（高级

## 深入响应式原理（上）
## 深入响应式原理（下）
## 编译（上）
## 编译（下）
## 扩展（上）
## 扩展（中）
## 扩展（下）
## Vue-Router
## Vuex










