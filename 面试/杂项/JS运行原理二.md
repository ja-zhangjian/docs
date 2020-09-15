---
autoPrev: JS运行原理一
autoNext: JS运行原理三
---

# JS 运行原理二

v8 引擎的原理？

 <img :src="$withBase('/面试/v8.png')">

 <img :src="$withBase('/面试/v82.png')">

V8 主要负责的工作：编译和执行 JS 代码，处理调用栈，内存的分配，垃圾的回收

重点：编译和执行 JS 代码

17 年 v8 架构调整

js 引擎在编译和执行 js 代码都会用到三个组件

- 解析器，将 js 源代码解析成抽象语法树 AST

- 解释器，将 AST 解释成字节码 bytecode，同时解释器也有直接解释执行 bytecode 的能力

- 编译器：负责编译出运行更加高效的机器代码

早期 v8 的问题

- 生成大量机器码占内存

- 缺少中间层机器码，无法实现一些优化策略

- 无法很好的支持和优化 js 的新语法特性

新架构

ast 通过基准解释器（Ignition）生成 bytecode 字节码，ast 被清除，v8 新的引擎 TruboFan 优化编译器

[参考 B 站 objtube 的卢克儿](https://space.bilibili.com/5104803/)
