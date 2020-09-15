---
# navbar: false
title: vue原理
# sidebar: auto
---

# vue 原理

## vue 原理-大厂必考试看

- 为何考？

- 如何考，什么方式？

  - 考察重点，不考细节
  - 和使用相关的原理，例如 vdom、模板渲染
  - 整体流程是否全面？热门技术是否有深度？

- vue 原理包括哪些
  - 组件化
  - 响应式
  - vdom 和 diff
  - 模板编译
  - 渲染过程
  - 前端路由

## 如何理解 MVVM

组件化基础

- 以前的组件化
- 数据驱动视图（MVVM，setState）

  - 传统组件，只是静态渲染，更新还是依赖操作 DOM
  - vue MVVM
  - React setState

MVVM=model+view+viewmodel

## 监听 data 变化的核心 API 是什么

vue 响应式

- 组件 data 的数据一旦变化，立刻触发视图的更新

- 实现数据驱动视图的第一步

- 核心 API-Object.defineProperty

- Object.defineProperty 的一些缺点（vue3.0 启动 proxy）

- proxy 有兼容性问题，且无法 polyfill

 <img :src="$withBase('/面试/objectdefineproperty.png')">

## 如何深度监听 data 变化

## vue 如何监听数组变化

（深层次的递归，数组的，需要自己创建数据原型来监听，不然会全局污染）

- 深度监听，需要递归到底，一次性计算量大（按需监听？？？）

- 新增删除属性，监听不到（要用 vue.set 和 vue.delete）

- 无法原生监听数组，需要特殊处理。

## 虚拟 DOM-面试里的网红

- vdom 是实现 vue 的重要基石

- diff 算法是 vdom 的核心和关键部分

- vdom 用 js 模拟 dom 结构，计算出最小的变更，操作 dom

 <img :src="$withBase('/面试/jsdom.png')">

标签/属性、样式、事件/子元素

snabbdom 学习 vdom

## 用过虚拟 DOM 吗

## 虚拟 DOM-diff 算法概述

树的 diff 时间复杂度 O（n^3）,算法不可用

优化时间复杂度 O（n）

- 只比较同一级，不跨级比较

- tag 不相同，删除，不再深度比较

- tag 和 key，两者相同，则认为是相同节点，不再比较

适合 web 网页的开发

## 深入 diff 算法源码-生成 vnode

snabbdom 源码

h 函数 返回一个 vnode 结构的对象

patch

## 深入 diff 算法源码-patch 函数

相同的 key 和 sel（元素），patchVnode

都不传 key，则 key 相同

## 深入 diff 算法源码-patchVnode 函数

新旧 vnode 对比，text 和 children 的逻辑判断

- updatechildren，新旧都有
- addvnodes，新有旧无
- removevnode，旧有新无
- 旧的有直接删除

## 深入 diff 算法源码-updateChildren 函数

old/newchildren 的对比

## 虚拟 DOM-考点总结和复习

- patchvnode

- addremovevnodes

- updatechildren（key 的重要性）

- vdom 核心概念：h、vnode、patch、diff、key

- vdom 存在的价值：数据驱动视图，控制 dom 的操作

## 模板编译前置知识点-with 语法

- 前置只是，js 的 with 语法

 <img :src="$withBase('/面试/with.png')">

慎用，打破了作用域规则，易读性变差

- vue template complier 将模板编译为 render 函数

- 执行 render 函数生成 vnode

## vue 模板被编译成什么

 <img :src="$withBase('/面试/模板编译.png')">

createElement 就是 h 函数

v-model 模板编译的时候，声明一个变量，显示的也是这个变量，同时绑定监听事件，当值变化，就修改这个变量，达到数据的双向绑定。

 <img :src="$withBase('/面试/模板编译2.png')">

## vue 组件可用 render 代替 template

 <img :src="$withBase('/面试/render代替template.png')">

总结

- with 语法

- 模板到 render 函数，再到 vnode，再到渲染和更新

- vue 组件可用 render 代替 template

## 回顾和复习已学的知识点

组件渲染/更新过程

- 初次渲染

- 更新过程

- 异步渲染

 <img :src="$withBase('/面试/模板编译回顾.png')">

## vue 组件是如何渲染和更新的

<img :src="$withBase('/面试/初次渲染过程.png')">

<img :src="$withBase('/面试/render触发getter.png')">

<img :src="$withBase('/面试/模板更新.png')">

新旧 vnode 的差异由 diff 算法来处理

<img :src="$withBase('/面试/模板完整流程图.png')">

touch 触发

collect asdependency 收集依赖

## vue 组件是异步渲染的

- 回顾\$nextTick
- 汇总 data 的修改，一次性更新视图
- 减少 dom 操作次数，提高性能

总结

- 渲染和响应式的关系

- 渲染和模板编译的关系

- 渲染和 vdom 的关系

- 初次渲染的过程

- 更新过程

- 异步渲染

## 如何用 JS 实现 hash 路由

hash 变化会触发网页跳转，即浏览器的前进后退

不会刷新页面，spa 必需的特点

永远不会提交到 server 端

js 修改 url， 手动修改 url 的 hash，前进后退

- hash=>windown.onhashchange

## 如何用 JS 实现 H5 history 路由

- 用 url 规范的路由，但是跳转时不刷新页面

- history.pushState

- window.onpopstate

- 后台处理前端的请求的页面，统一到 index.html，以免 404

## vue 原理-考点总结和复习

- 组件化

  - 组件历史
  - 数据驱动视图
  - MVVM

- 响应式
  - Object.defineProperty
  - 监听对象（深度），监听数组
  - Object.defineProperty 的缺点（3 个缺点）（vue3 用 proxy）
- vdom 和 diff
- 模板编译
- 应用背景
  - vnode 结果
  - snabbdom vnode h patch
  - with 语法
  - 模板编译为 render 函数
  - 执行 render 函数生成 vnode
- 渲染过程
  - 初次渲染
  - 更新渲染
  - 异步渲染
- 前端路由
  - hash 和 H5 history
