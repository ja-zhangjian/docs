---
autoPrev: 浏览器是如何运作的？
autoNext: JS运行原理二
---

# JS 运行原理一

js 是如何被编译的？
<img :src="$withBase('/面试/js神图1.png')">
<img :src="$withBase('/面试/js神图2.png')">

运行时编译=>JIT

首先将 JS 源码通过解析器，解析成抽象语法树 AST，

接着再通过解释器，将 AST 编译成字节码 bytecode，字节码是跨平台的一种中间表示，不同与最终的机器代码，字节码与平台无关，能够在不同操作系统上运行，

字节码最后通过编译器生成机器代码，由于不同的处理器平台使用的机器代码会有差异，所以编译器会根据当前平台，来编译出相应的机器代码，这里的机器代码就是汇编代码。（简化流程）

[参考 B 站 objtube 的卢克儿](https://space.bilibili.com/5104803/)
