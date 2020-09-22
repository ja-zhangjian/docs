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

## 第二章 promise 的理解和使用

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
//练习;
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

    (1)promise 的 then()返回一个新的 promise, 可以开成 then()的链式调用

    (2)通过 then 的链式调用串连多个同步/异步任务

  - promise 错误穿透?

    (1)当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调,

    (2)前面任何操作出了错误, 都会传到最后失败的回调中处理

  - 中断 promise 链

    (1)当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数

    (2)办法: 在回调函数中返回一个 pendding 状态的 promise 对象

## 第三章 手写 promise（repeat again）

## 第四章 async 与 await

1. async 函数
   函数的返回值为 promise 对象
   promise 对象的结果由 async 函数执行的返回值决定

2. await 表达式
   await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
   如果表达式是 promise 对象, await 返回的是 promise 成功的值
   如果表达式是其它值, 直接将此值作为 await 的返回值

3. 注意:
   await 必须写在 async 函数中, 但 async 函数中可以没有 await
   如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 来捕获处理

   为什么用？

   简化 promise 对象的使用，不在通过 then 指定回调函数取结果数据，但是错误要 try。。。catch 来捕获。终极解决方案。。。。

## 第五章

<img :src="$withBase('/前端/sgg宏微队列.png')">

1. 宏列队: 用来保存待执行的宏任务(回调), 比如: 定时器回调/DOM 事件回调/ajax 回调
2. 微列队: 用来保存待执行的微任务(回调), 比如: promise 的回调/MutationObserver 的回调
3. JS 执行时会区别这 2 个队列
   JS 引擎首先必须先执行所有的初始化同步任务代码
   每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行

说的不全，在 call stack 为空时，js 的渲染线程会尝试渲染。

## 第六章 promise 测试题

1.

```js
setTimeout(() => {
  console.log(1);
}, 0);
Promise.resolve().then(() => {
  console.log(2);
});
Promise.resolve().then(() => {
  console.log(4);
});
console.log(3);
```

2.

```js
setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve) => {
  console.log(2);
  resolve();
})
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  });
console.log(5);
```

3.

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });
first().then((arg) => {
  console.log(arg);
});
console.log(4);
```

4.

```js
setTimeout(() => {
  console.log("0");
}, 0);
new Promise((resolve, reject) => {
  console.log("1");
  resolve();
})
  .then(() => {
    console.log("2");
    new Promise((resolve, reject) => {
      console.log("3");
      resolve();
    })
      .then(() => {
        console.log("4");
      })
      .then(() => {
        console.log("5");
      });
  })
  .then(() => {
    console.log("6");
  });
new Promise((resolve, reject) => {
  console.log("7");
  resolve();
}).then(() => {
  console.log("8");
});
```

5.

```js
async function async1() {
  console.log("async1 start");
  await async2(); // async2().then(() => {})
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");
```

明早再做~~答案在最最最下面

》

》

》

》

》

》

》

》

》

》

》

》

》

》

》

》

》

》

》
:::tip 答案
答案一： 3 2 4 1

答案二： 2 5 3 4 1

答案三： 3 7 4 1 2 5

答案四： 1 7 2 3 8 4 6 5 0

答案五：

script start

async1 start

async2

promise1

script end

async1 end

promise2

setTimeout

:::
