---
title: 电商系统(算是完了)
# autoPrev: README
# autoNext: README
---

# Vue 电商系统

## 第 1 章 课程简介

node 安装、升降级

## 第 2 章 Git 安装和配置

<img :src="$withBase('/项目/Git速查.png')">

## 第 3 章 Vue Cli4.0 安装和使用

```js
npm install -g @vue/cli

yarn global add @vue/cli

vue --version
```

vue create projectName

Vue DevTools

## 第 4 章 项目基础架构

前端跨域解决方案

问题：

- 跨域是浏览器为了安全而做出的限制策略
- 浏览器请求必须要遵循同源策略;同域名、同端口、同协议

方案：

- CORS 跨域：服务端设置，前端直接调用，后台允许前端某个站点进行访问

Access-Control-Allow-Credentials:true 能够跨域的时候发送 cookie

Access-Control-Allow-Orgin:"\*"

- JSONP 前端适配，后台配合，需要前后端同时改造。前端安装 jsonp 插件=>jsonp(url,(err,res)=>{})

- 接口代理：通过修改 Nginx 服务器配置来实现，前端修改，后台不动。vue.config.js=>本地开发环境代理

```js
module.exports={
    devServer:{
        host:
        port:
        proxy:{
            '/api'"{
                targrt:目标地址
                changeOrigin:true/false
                pathRewrite:{

                }
            }
        }
    }
}
```

基本插件介绍：

vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie

路由的封装：

要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

要是加了/，访问子路由，要加上父路由

storage 的封装

接口的返回错误拦截，请求的要看文档去，又看到一个好东西

```js
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = "/#/login";
      // return Promise.reject(res);
    } else {
      alert(res.msg);
      // Message.warning(res.msg);
      // return Promise.reject(res);
    }
  },
  (error) => {
    let res = error.response;
    alert(res.data.message);
    // Message.error(res.data.message);
    // return Promise.reject(error);
  }
);
```

接口的环境变量的设置，要是设置代理就不需要这么写了。

模拟数据=>mock

easy-mock

mock.js 这个好，好用

import 是静态加载，require 运行时加载，我记得在哪看到的，我忘了

## 第 5 章 商城首页

1. 封装模态框组件
2. swiper 的使用
3. vue 的 transition 进入离开的设置上下位置有讲究的,enter 需要放在下面

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

4. emit 使用,还能这么写，我觉得惊讶，就说明理解不够深，菜

```js
//子组件
v-on:click="$emit('submit')"
v-on:click="$emit('cancel')"
//父组件
v-on:submit="goToCart"
v-on:cancel="showModal = false"
```

5. vue-lazyload 新增一个 v-lazy 的指令代替了:src，但是注意的是指令后面跟着的是" ' ' "执行一串 js 代码

```js
<img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="" />
```

6. vue-awesome-swiper 使用的时候，如果使用懒加载，很可能出现空白，因为没加载出来嘛，解决的方法，就是第一张和最后一张不使用懒加载，要么就是整个都不使用懒加载。这个老师的解决方法好像是给最后一个再加一张非懒加载的图片

## 第 6 章 登录页面

import VueCookie from 'vue-cookie'

location.hash=>我们需要排除 index 页面的强制登陆

## 第 7 章 Vuex 集成

数据回来有延迟，要使用计算属性

getters 过滤脏数据

## 第 8 章 产品站页面

吸顶效果

```js

    mounted(){
      window.addEventListener('scroll',this.initHeight)
    },
    methods:{
      initHeight(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152? true:false;
      }
    },
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false)
    }
//  <div class="nav-bar" :class="{'is_fixed':isFixed}"></div>
//     .is_fixed{
//       position:fixed;
//       top:0;
//       width:100%;
//       box-shadow: 0 5px 5px $colorE;
//     }

// box-shadow: 0 5px 5px $colorE; X轴 Y轴 模糊值，颜色
```

???有个奇奇怪怪的事情

```js
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
```

HTML DOM removeEventListener() 方法,最后一个参数 useCapture 可选。布尔值，指定移除事件句柄的阶段。

- 可能值：
- true - 在捕获阶段移除事件句柄
- false- 默认。在冒泡阶段移除事件句柄
- 注意: 如果添加两次事件句柄，一次在捕获阶段，一次在冒泡阶段，你必须单独移除该事件。

不是默认 false 吗？

## 第 9 章 商品详情页面

axios 的接口错误拦截要形成闭环，不然误操作会出现 BUG

## 第 10 章 购物车页面

尽量自己来分 class，虽然 scoped 可以生成区分作用域的标签，但是会让页面特别的重。

大量的业务逻辑，但是它的购物车的数量是后台来判断的，确实省事

PostCSS

Vue CLI 内部使用了 PostCSS。

你可以通过 .postcssrc 或任何 postcss-load-config 支持的配置源来配置 PostCSS。也可以通过 vue.config.js 中的 css.loaderOptions.postcss 配置 postcss-loader。

我们默认开启了 autoprefixer。如果要配置目标浏览器，可使用 package.json 的 browserslist 字段。

## 第 11 章 ElementUI 集成

按需引入，按需打包，两个概念

ElementUI 面向 B 端的

## 第 12 章 订单确认页面

## 第 13 章 订单结算

## 第 14 章 订单列表

document.forms[0].submit()

支付前后端三七开，支付宝可以返回一个表单，由前端渲染(默认不提交，手动提交的)

vue.config.js => lintOnSave:false 关闭 eslint 的校验

## 第 15 章 上线部署

publicPath 域名根路径

outputDir 输出路径

indexPath 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。

productionSourceMap 构建慢，不安全，但是方便调试（生成了源码文件 map）

@babel/plugin-syntax-dynamic-import 路由懒加载用到允许解析 import

png 相比的画图片素质更好

## 第 16 章 课程总结
