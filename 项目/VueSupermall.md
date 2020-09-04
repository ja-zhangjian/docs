---
title: VueSupermall（完）
# autoPrev: README
# autoNext: README
---

# VueSupermall

- Vue 响应式原理
  1.app.message 修改数据，Vue 内部是如何监听 message 数据的改变

Object.defineProperty -> 监听对象属性的改变

```js
Object.keys(obj)forEach(key=>{
    let value = obj[key]
    Object.defineProperty(obj,key,{
    set(newValue){
        console.log('监听'+key+"改变")
        value = newValue
    },
    get(){
        console.log('获取'+key+"改变")
        return value
     }
   })
})
```

2.当数据发生改变的时候，vue 是如何知道要通知修改，界面发生刷新

发布订阅者模式

```js
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(watcher) {
    this.subs.push(watcher);
  }
  notify() {
    this.subs.forEach((item) => {
      item.update();
    });
  }
}
class Watcher {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log("发生改变");
  }
}
const dep = new Dep();
const w = new Wather("张三");
dep.addsub(w);
dep.notify();
```

<img :src="$withBase('/vue/vue.png')">
