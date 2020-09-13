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

```js
src
├── compiler        # 编译相关
├── core            # 核心代码
├── platforms       # 不同平台的支持
├── server          # 服务端渲染
├── sfc             # .vue 文件解析
├── shared          # 共享代码
```

### 源码构建

基于 rollup，适合库的构建

runtime only 轻量（运行时不带编译）推荐

runtime+compiler （运行时编译）重点分析

### 入口开始

入口：src/platforms/web/entry-runtime-with-compiler.js

vue=>index.js=>core/index.js=>instance/index.js

通过 function 构建 vue，为什么不用 class？（ES5 和 ES6）=>ES5 好拆分，好维护

## 数据驱动

### 数据驱动

视图由数据驱动生成，不会直接操作 DOM，更多关心数据的修改。DOM 变成数据的映射。

数据更新驱动视图的变化。

### new Vue 发生了什么试看

init 方法=>合并 options=>\_data 的 proxy=>\$mount 挂载（中间还有分支逻辑）

### Vue 实例挂载的实现

el 的判断，不能挂载到 html 或者 body（会覆盖），所以通常挂载到 div 上面

template 的判断

updateComponent

### render

Vue 的私有方法，render 方法生成 VNode，根节点只有一个 VNode（虚拟 dom）

### Virtual DOM

用原生的 js 对象去描述一个 dom 节点，定义在 vnode.js 中

Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上还要经历 VNode 的 create、diff、patch 等过程

### createElement

回忆一下 render 方法，分两种，一种是 template 申明，一种是手写 render 方法，这两种都会调用 createElement 方法，区别是六号位的参数是 false 和 true

过滤参数，参数量不一致，处理上移，再执行私有的\_createElement

拍平成为一维 VNode 数组（简单的，复杂的=>递归）

### update

把 VNode 映射成真实 DOM

patch 在浏览器中调用=>createPatchFunction（实际的 dom 操作、dom 上面属性的钩子函数）

函数柯里化的技巧，因为需要多平台运行，参数复用，在执行 patch 之前抹平差异。

替换原有的节点

newVue=>init=>\$mount=>compile=>render=>vnode=>patch=>DOM

## 组件化

### 组件化

组件是资源独立的，可复用，可嵌套

### createComponent

构造子类构造函数、安装组件钩子函数和实例化 vnode

### patch（上）

> 好家伙，给我看困了，我中午可是喝了两大杯浓茶的，咋回事呢

组件 patch

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
