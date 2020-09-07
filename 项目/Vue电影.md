---
title: Vue 电影（完）
# autoPrev: README
# autoNext: README
---

# Vue 电影

## vue 项目

1. img 的 src 在 cli 中引入问题。尤大 16 年的 issue 回答推荐“~assets”，这里起别名没效果，也能用默认的@/

```js
vue-html-loader and css-loader translates non-root URLs to relative paths.
In order to treat it like a module path, prefix it with ~:

<img class="logo" src="~assets/logo.png">
```

2. vue.config.js 中配置静态资源别名问题

```js
  configureWebpack: {
    resolve: {
      alias: {
        //配置别名,修改后需要重新编译才能生效
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
```

另一种方法

```js
const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
     chainWebpack: (config) => {
       config.resolve.alias
         .set("@", resolve("./src"))
        .set("components", resolve("./src/components"))
         .set("views", resolve("src/views"))
         .set("assets", resolve("src/assets"))
         .set("network", resolve("src/network"))
         .set("common", resolve("src/common"));
       //set第一个参数：设置的别名，第二个参数：设置的路径
       // 修复HMR
       config.resolve.symlinks(true);
     },
```

3. 引用的小图片后期是通过 webpack 处理成 base64 的小图片
4. iconfont 的优势：矢量图，缩放不失真，操作和字体一样，颜色大小容易改变
5. 取 axios 的数据的时候，我忘记了 filter 过滤器了
6. 参考的电影网站是用 mint-ui 来实现轮播的，使用了一下，挂载到全局上面，轮播图的小圆点的位置需要重新手写设置，我看了原网页，CV 了
7. 我写的时候，设计的不好，既然是单页面应用，对于正在上映模块和即将上映模块应该整合在一起，但是在一起又乱了。。。。
8. css 控制文本不换行，并且省略。说实话，我就记得要设置宽度，怎么写我忘了。好记性不如烂笔头

```stylus
  width 100px
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
```

9. stylus 怎么时不好用，时不好用呢
10. 这个人说的不好，应该在顶层中把数据请求到，然后分发到各个组件，其实也行，各模块请求各的，但是多次请求总归不好，徒增消耗。
11. 我觉得我移动端的不太行，样式写的少
12. vue-awesome-swiper 依赖 swiper，demo 参考官网
13. 时间格式化

```js
//时间格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftzero(str)
      );
    }
  }
  return fmt;
}
function padLeftzero(str) {
  return ("00" + str).substr(str.length);
}
```

拿到时间戳以后过滤

```js
  filters: {
    datefilter: function(v) {
      const date = new Date(v * 1000);
      return formatDate(date, "yyyy/MM/dd");
    },
  },
```

14. better-scroll
15. this.\$nextTick(()={})黑魔法
16. vue-x 状态管理，数据快照，调试查看
17. ...mapState([])
18. getters vue-x 中处理返回
19. vue-x 默认传第一个参 state
20. mutation 常量风格，啧啧啧

## vue 服务端渲染

1. 首屏加载速度，seo 问题
2. yarn create nuxt-app <项目名>
3. 我看了一下，官方文档很成熟了
4. 视图的概念
5. 当前页面刷新，服务端执行 async，其他页面跳转过来，客户端执行 async
6. npm i @nuxt.js/proxy -D
7. process.server=true/false判断是前台，还是后台

## vue 基础

v-show:隐藏显示

v-if:增删 dom，不推荐

:class=“对象”，缺点，新增的对象不顶用，老问题了数据劫持失败

:class=“数组”，没上面的问题了

> 想到一个面试题：js 中数组有多少种方法，如何分类=>以返回值来区别，回头还要再扣一扣

v-for="(item,index) in/of items" index=>索引值（数组对象都一样）

:key="item.id" 理想中的 key 值是每一项都有且唯一的 id，节点复用

push、pop、shift、unshift、splice、sort、reverse 能够监测变动

concat、filter、slice、map 新数组换旧数组，需要重新赋值

特殊的=>通过索引值修改数组，也无法监测变动，可以通过 Vue.set 或者 splic(0,1,“修改的值”)

input 框下面的@input 事件=>只要 Value 改变，就会触发，@change=>只要失去焦点就会触发。

v-model 数据绑定

filter 返回真值，indexOf 字符串查找(查不到就是-1，查到返回坐标)

阻止冒泡事件=>事件修饰符=>.stop

阻止默认行为=>.prevent

.self=>只有事件源是自己才触发，这个我还没用过

.once 一次性

.enter=>按键修饰符

v-model 双向数据绑定，checkbox 绑定的是 Boolean 值；多选项绑定数组，同时要加上 value 值。单选绑定字符串，也要加上 value

.lazy=>失去焦点触发

.number=>限制数字输入，如果开始输入的是字符，就失效了，也是鸡肋，还是在 type 上限制 number 靠谱

.trim

fetch：标准

> 看到这的时候，我在想项目获取数据如何得到，翻了翻后面的视频，我觉得我之前 http 的知识知道是知道，但是不会用 ，对于别人的网站获取数据，此网站支持所有请求的跨域，但在请求头上自定义自己可接受的请求头信息，才支持跨域，减少了很多恶意请求。讲的知识点，还是要应用到实际才印象深刻，脑子不灵光，下次一定记住。

```js
fetch（url）.then(res=>res.json())
			.then(res=>console.log(res))
//类似promise，.then的链式调用
//第一个then返回的是请求头信息（行、头、体）
```

axios：推荐

axios 会自动的包装一个 data 属性

computed：老生常谈了，性能比 methods 要高，有缓存，为什么？源码哪里还没看到，打个标记，记得看。

ref=>\$.refs 耦合度太高了，不建议

事件总线 bus.$on=>bus.$emit

动态组件

```vue
<component></component> <keep-alive></keep-alive>
```

## vue 进阶

slot=>在子组件设置，内容分发，作用域、具名

transition 过渡

```vue
<transition name="class">
单个元素
</transition>
```

完了，我好像 css3 的动画效果忘的差不多，就记得 transform：translate 了

多元素过渡动画，diff 算法会根据不同的标签来创建 DOM 节点，相同的会复用。所以需要通过 key 特性设置唯一的值来标记，以让 Vue 来区分它们。mode：in-out，out-in

列表过渡：

```vue
//transition-group会以默认的<span>元素呈现
<transition-group tag="ul">
//设置：key,不要绑定索引值
</transition-group>
```

11 个生命周期=10+errorCaptured（2.5.0+）=>捕获子孙组件的错误，三个参数（错误对象，错误组件实例，错误来源信息），该钩子返回 false 来阻止该错误向上传播

swiper 初始化过早问题 =>updated，异步更新 DOM（频繁更新，不推荐）:key=“设置数据长度

自定义指令 =>操作底层 DOM

全局

```js
<div v-hello="'red'"></div>
// 注册一个全局自定义指令 `v-hello`
Vue.directive('hello', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted:(el，bind) {
  //el=>拿到底层dom
    // 聚焦元素
    el.style.background = bind.value
  }，
  update(){

  }
})
```

指令生命周期

inserted=>就走一次

commonJS=>module.exports require

ES6 export default import form

eslint

vue-反向代理

vue.config.js => devserver=>proxy，改了配置文件要重启服务器

vue router

声明式导航

(1)hash 路由=>location.hash=>window.onhashchange

(2)history 路由=>history.pushState=>window.onpopstate

二级路由=>children，重定向

编程式导航

this.\$router.push()

动态路由=>path: '/user/:id' ，\$route.params 拿

命名路由

```vue
<router-link :to="{ name: 'user', params: { userId: 123 } }">User</router-link>
```

history 模式=>mode: 'history'，缺点会发起请求。所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

路由守卫/路由拦截

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

组件内的守卫

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
};
```
