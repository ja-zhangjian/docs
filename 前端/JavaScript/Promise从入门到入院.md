# Promise 从入门到入院

## 第一章 pending

1. 实例对象和函数对象

- 点的左边是对象（函数对象）、()的左边是函数

2. 同步和异步回调函数

- 判断回调函数的三个条件？自定义，未直接调用，却执行。

3. js 的 error 的处理

- Error：所有错误的父类型
- ReferenceError：引用的变量不存在

  Uncaught=>没有被捕获的

- TypeError：数据类型不正确的错误
- RangeError：数据值不在其所允许的范围内
- SyntaxError：语法错误

4. 抛出和捕获错误
   捕获错误：try catch

catch 中的参数 error 有 error.message 和 error.stack

抛出错误：throw new Error()

## 第二章 promise的理解和使用

1. promise 的理解

- .抽象表达:
  Promise 是一门新的技术(ES6 规范)
  Promise 是 JS 中进行异步编程的新解决方案(旧的是谁?)
- 具体表达:
  从语法上来说: Promise 是一个构造函数
  从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/失败的结果值
- promise 的状态改变(只有 2 种, 只能改变一次)
  pending 变为 resolved
  pending 变为 rejected
- promise 的基本流程

 <img :src="$withBase('/前端/promise流程.png')">

2.  为什么要用 promise？

- 指定回调函数的方式更加灵活: 可以在请求发出甚至结束后指定回调函数
- 支持链式调用, 可以解决回调地狱问题

```js
练习;
const p = new Promise((res, rej) => {
  setTimeout(() => {
    const time = Date.now();
    if (time % 2 == 1) {
      res("success");
    } else {
      rej("defult");
    }
  }, 1000);
});
p.then(
  (value) => {
    console.log(value);
  },
  (err) => {
    console.log(err);
  }
);
```

3. 如何使用 promise？

- 主要 API
  Promise 构造函数: Promise (excutor) {}

  Promise.prototype.then 方法: (onResolved, onRejected) => {}

  Promise.prototype.catch 方法: (onRejected) => {}

  Promise.resolve 方法: (value) => {}

  Promise.reject 方法: (reason) => {}

  Promise.all 方法: (promises) => {}

  Promise.race 方法: (promises) => {}

- 几个重要问题

  - 如何改变 promise 的状态?

    resolve、reject、抛出异常

  - 一个 promise 指定多个成功/失败回调函数, 都会调用吗?

    允许指定多个回调函数

  - promise.then()返回的新 promise 的结果状态由什么决定?
    (1)简单表达:

    由 then()指定的回调函数执行的结果决定

    (2)详细表达:

    ① 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常

    ② 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值

    ③ 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

  - 改变 promise 状态和指定回调函数谁先谁后?

    1. 都有可能，正常情况是先指定回调再改变状态，但也可以反过来

    2. 如何先改状态再指定回调？

       在执行器函数中直接调用 resolve()/reject()

       延迟更长时间才调用 then()

    3. 什么时候才能得到数据？

       先指定回调，那当状态发生改变时，回调就会调用，得到数据

       先改状态的，那当指定回调时，回调函数就会调用，得到数据

  - promise 如何串连多个操作任务?
   
       (1)promise的then()返回一个新的promise, 可以开成then()的链式调用
 
       (2)通过then的链式调用串连多个同步/异步任务
  - promise 错误穿透?
   
       (1)当使用promise的then链式调用时, 可以在最后指定失败的回调, 
       
       (2)前面任何操作出了错误, 都会传到最后失败的回调中处理
  - 中断 promise 链
   
       (1)当使用promise的then链式调用时, 在中间中断, 不再调用后面的回调函数
       
       (2)办法: 在回调函数中返回一个pendding状态的promise对象

## 第三章 手写promise

## 第四章

## 第五章

## 第六章
