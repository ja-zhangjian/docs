---
autoPrev: ES7
---

# ES8

## async 和 await

async 函数

```js
async function fn() {
  //返回一个promise的对象
}
```

await 表达式

1. await 必须写在 async 函数中
2. await 右侧的表达式一般为 promise 对象
3. await 返回的是 promise 成功的值
4. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

## Object.values 和 Object.entries

1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组
2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组

## Object.getOwnPropertyDescriptors

该方法返回指定对象所有自身属性的描述对象

深层次对象克隆
