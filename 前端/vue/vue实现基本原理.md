---
title: Vue实现基本原理
# autoPrev: README
sidebarDepth: 1
---

# Vue 实现基本原理

## 说明

1. 分析 vue 作为一个 MVVM 框架的基本实现原理
   数据代理
   模板解析
   数据绑定-->双向数据绑定
2. 不直接看 vue.js 的源码
3. 剖析 github 上某基友仿 vue 实现的 mvvm 库
4. 地址: https://github.com/DMQ/mvvm

## 准备知识

1. [].slice.call(lis): 将伪数组转换为真数组

方法是特别的属性，属性只是一个函数

为什么能用 call，方法有方法名和方法值，方法的值是一个函数，然后函数是一个对象，一个对象不能在另一个对象里面

2. node.nodeType: 得到节点类型
3. Object.defineProperty(obj, propName, {}): 给对象添加/修改属性(指定描述符)
   configurable: true/false 是否可以重新 define
   enumerable: true/false 是否可以枚举(for..in / keys())
   value: 指定初始值
   writable: true/false value 是否可以修改
   get: 回调函数, 用来得到当前属性值
   set: 回调函数, 用来监视当前属性值的变化
4. Object.keys(obj): 得到对象自身可枚举的属性名的数组
5. DocumentFragment: 文档碎片(高效批量更新多个节点)
6. obj.hasOwnProperty(prop): 判断 prop 是否是 obj 自身的属性

## 数据代理

1. 数据代理: 通过一个对象代理对另一个对象(在前一个对象内部)中属性的操作(读/写)
2. vue 数据代理: 通过 vm 对象来代理 data 对象中所有属性的操作
3. 好处: 更方便的操作 data 中的数据
4. 基本实现流程
   - a.通过 Object.defineProperty()给 vm 添加与 data 对象的属性对应的属性描述符
   - b.所有添加的属性都包含 getter/setter
   - c.getter/setter 内部去操作 data 中对应的属性数据

## 模板解析

### 模板解析的基本流程

1. 将 el 的所有子节点取出, 添加到一个新建的文档 fragment 对象中
2. 对 fragment 中的所有层次子节点递归进行编译解析处理
   - 对大括号表达式文本节点进行解析
   - 对元素节点的指令属性进行解析
   - 事件指令解析
   - 一般指令解析
3. 将解析后的 fragment 添加到 el 中显示

### 大括号表达式解析

1. 根据正则对象得到匹配出的表达式字符串: 子匹配/RegExp.\$1 name
2. 从 data 中取出表达式对应的属性值
3. 将属性值设置为文本节点的 textContent

### 事件指令解析

1. 从指令名中取出事件名
2. 根据指令的值(表达式)从 methods 中得到对应的事件处理函数对象
3. 给当前元素节点绑定指定事件名和回调函数的 dom 事件监听
4. 指令解析完后, 移除此指令属性

### 一般指令解析

1. 得到指令名和指令值(表达式) text/html/class msg/myClass
2. 从 data 中根据表达式得到对应的值
3. 根据指令名确定需要操作元素节点的什么属性

- v-text---textContent 属性
- v-html---innerHTML 属性
- v-class--className 属性

4. 将得到的表达式的值设置到对应的属性上
5. 移除元素的指令属性

## 数据绑定

一旦更新了 data 中的某个属性数据, 所有界面上直接使用或间接使用了此属性的节点都会更新

### 数据劫持

1. 数据劫持是 vue 中用来实现数据绑定的一种技术
2. 基本思想: 通过 defineProperty()来监视 data 中所有属性(任意层次)数据的变化, 一旦变化就去更新界面

### 四个重要对象

1. Observer
   a.用来对 data 所有属性数据进行劫持的构造函数

   b.给 data 中所有属性重新定义属性描述(get/set)

   c.为 data 中的每个属性创建对应的 dep 对象

2. Dep(Depend)
   a.data 中的每个属性(所有层次)都对应一个 dep 对象

   b.创建的时机:
   _ 在初始化 define data 中各个属性时创建对应的 dep 对象
   _ 在 data 中的某个属性值被设置为新的对象时

   c.对象的结构
   {
   id, // 每个 dep 都有一个唯一的 id
   subs //包含 n 个对应 watcher 的数组(subscribes 的简写)
   }

   d.subs 属性说明

- 当 watcher 被创建时, 内部将当前 watcher 对象添加到对应的 dep 对象的 subs 中 \* 当此 data 属性的值发生改变时, subs 中所有的 watcher 都会收到更新的通知,从而最终更新对应的界面

3. Compile

a.用来解析模板页面的对象的构造函数(一个实例)

b.利用 compile 对象解析模板页面

c.每解析一个表达式(非事件指令)都会创建一个对应的 watcher 对象, 并建立 watcher 与 dep 的关系

d.complie 与 watcher 关系: 一对多的关系

4. Watcher

a.模板中每个非事件指令或表达式都对应一个 watcher 对象

b.监视当前表达式数据的变化

c.创建的时机: 在初始化编译模板时

d.对象的组成
{
vm, //vm 对象
exp, //对应指令的表达式
cb, //当表达式所对应的数据发生改变的回调函数
value, //表达式当前的值
depIds //表达式中各级属性所对应的 dep 对象的集合对象
//属性名为 dep 的 id, 属性值为 dep
}

5. 总结: dep 与 watcher 的关系: 多对多

a.data 中的一个属性对应一个 dep, 一个 dep 中可能包含多个 watcher(模板中有几个表达式使用到了同一个属性)

b.模板中一个非事件表达式对应一个 watcher, 一个 watcher 中可能包含多个 dep(表达式是多层: a.b)

c.数据绑定使用到 2 个核心技术

_ defineProperty()
_ 消息订阅与发布

### MVVM 原理图分析

<img :src="$withBase('/前端/MVVM基本.png')">

### 双向数据绑定

1. 双向数据绑定是建立在单向数据绑定(model==>View)的基础之上的

2. 双向数据绑定的实现流程:

a.在解析 v-model 指令时, 给当前元素添加 input 监听

b.当 input 的 value 发生改变时, 将最新的值赋值给当前表达式所对应的 data 属性
