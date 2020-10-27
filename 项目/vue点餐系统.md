# vue 点餐系统

## 前置铺垫

### 1. new Vue 的三种

```js
new Vue({
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  el:'#app'
  render: (h) => h(App),
})

new Vue({
  el:'#app'
  components:{App},
  template:'<App />'
```

后两种会报错，缺少运行时编译的包，我记得是 100kb 来着，这是脚手架搭建的，要么就是加上\$mount,要么就是新建 vue.conif.js 加上配置。这个肯定用第一个，官方都是这么来的。少 100k 呢。

```js
module.exports = {
  runtimeCompiler: true,
};
```

### 2. Eslint 的配置

```js
//package.json中逐条配置
"rules": {
      "no-console": 0 // 0 代表关闭，1代表警告，2代表检查报错
 },

//vue.config.js中整体配置
    // 关闭ESlint, 默认为true，编译后在控制台警告错误信息，但是不影响编译，
    // 设置为‘error’的时候在页面报错显示错误内容，设置为false关闭提示
 lintOnSave: false,
```

### 3. stylus 使用

- 特点

1.  简写大括号

2.  简写封号

3.  样式嵌套，层级明显

    ```
    #app
        h1
          color $color
        .btn1
          btnStyle(100px, 100px, red)
        .btn2
          btnStyle(200px, 200px, blue)
        .content
          font-size 24px
          &.content1
            color $color
    ```


     - 定义变量：复用

        ```
        $color = red
        ```

     - 定义混合（mixins）：代码复用，提高效率，灵活度高，等同于js的函数

        ```
         btnStyle(w, h, bg)
            width w
            height h
            background bg
            border none
        ```

     - 定义函数: 可进行计算，灵活度更高(这个我记得优化是最好别用css的计算，浪费性能)

          ```
          // 定义函数
          add(a, b)
              a + b
          // 使用函数
          padding add(10px, 20)
          ```



      - 父级引用

             1. 语法：&

             2. 作用：在子元素中能够找到父级元素

                ```
                 #app
                    h1
                      color $color
                    .btn1
                      btnStyle(100px, 100px, red)
                    .btn2
                      btnStyle(200px, 200px, blue)
                    .content
                      font-size 24px
                      &.content1
                        color $color
                ```

      - 导入文件

             1. 语法: @import ''xx'

      - 其他: [ https://stylus.bootcss.com/ ]()

### 4. 移动端的适配

- viewport 适配

  目的=>布局视口 = 设备视口

        ```
        meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
        ```

- rem 适配（我记得媒体查询也行啊）

1.  根据不同屏幕大小控制根节点 rem 字体大小

2.  页面中的内容大小设置用 rem 从而达到适配的目的

3.  防抖，防止用户频繁拉伸屏幕

```js
let timeoutId;
window.addEventListener("pageshow", function() {
  refreshRem();
});
window.addEventListener("resize", function() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function() {
    refreshRem();
  }, 300);
});

function refreshRem() {
  // 获取屏幕的宽度
  let clientWidth = document.documentElement.clientWidth;
  // 将屏幕宽度10等分
  let fontValue = clientWidth / 10;

  // 设定单位rem值的大小
  let rem = fontValue;

  // 设定body标签字体大小
  document.body.style.fontSize = "12px";
  // 设定html上fontsize的大小
  document.documentElement.style.fontSize = rem + "px";
}
```

### 5. 第三方库实现适配

postcss-px2rem、lib-flexible

```js
//main.js
import "lib-flexible/flexible";

//vue.config.js
const pex2rem = require("postcss-px2rem");
const postcss = pex2rem({
  remUnit: 37.5,
});
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
};
```

stylus 报红

```css
<style lang="stylus" type="text/stylus"></style>
```

:::tip 提示
重头再过一遍基础

~~碰到一个有意思的事情，core.js 居然不能解析 ES6 的 Date.now(),有点奇怪，2,3 版本都不行，但是 github 上面又是说能。找到原因了，2 版本老了，3 才可以 webpack.config.js 配置要重启。~~

id: Date.now() || new Date().getTime(),//可以这么写达到兼容，也可以用 polyfill 打上补丁

我记得 polyfill 是会污染全局的。要用那个 babel-runtime。

是哪里出了问题？
:::

:::tip 记录 webpack 用到的 loader
babel=>3 个，@组的意思

style-loader、css-loader

url-loader、file-loader

vue-loader

vue-style-loader=>This is a fork based on style-loader. Similar to style-loader, you can chain it after css-loader to dynamically inject CSS into the document as style tags. However, since this is included as a dependency and used by default in vue-loader, in most cases you don't need to configure this loader yourself.

对于 vue-style-loader 和 style-loader 我就很奇怪，这个官方配置也太致命了，你既然是基于 style-loader 的，那为什么配置解析 css-loader 的时候又没有，真的是很无语。

[vue-loader 指南](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)
:::

:::tip 记录 webpack 用到的插件

html-webpack-plugin=>webpack 自己会生成一个 html 页面来引入 bundle.js，我们需要将 js 引入到我们想要的 html 页面上面时，需要这个.官方翻译也太长了。。。

clean-webpack-plugin=>By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

:::

类方法，实例方法

函数对象的方法，实例对象的方法

回调函数：自定义，未调用，最终执行了的

关于回调函数的三个问题

什么时候执行？用来做什么的？this 是谁？

class 的绑定，类名不确定的时候用字符串的形式；类名确定了，但不确定有没有，用对象形式。对于不改变的样式，用静态的 class。

我有个问题？前端性能优化有个要求是，减少多次请求，但是 vue2 数据绑定是需要一次性递归监听的。那么平衡点在哪里？

vue 在内部如何监听数据的变化？

1. vue 会监视 data 中所有层次的属性
2. 对象中的属性数据（响应式属性：当修改属性值，内部会自动更新对应的界面），给属性添加 setter 方法
3. 数组中的元素数据，重写数组一系列更新数组元素的方法。调用原生数组对应的方法，对数组元素进行处理；并且更新视图=>效率高，不需要每个元素添加 setter

bind 函数

1. 返回一个新函数
2. 新函数内部会调用原函数（通过 call 调用）
3. 在调用时指定原函数执行的 this 为 bind()的第一个参数的值

时间处理的插件

1. day-js
2. moment（打包过大）
3. date-fns

过滤器传值，||短路语法，形参默认值

自定义指令

1. 注册全局指令
   Vue.directive('my-directive', function(el, binding){
   el.innerHTML = binding.value.toupperCase()
   })
2. 注册局部指令
   directives : {
   'my-directive' : {
   bind (el, binding) {
   el.innerHTML = binding.value.toupperCase()
   }
   }
   }
3. 使用指令
   v-my-directive='xxx'

webpack

使用 commonjs 模块化语法，向外暴露一个配置对象，因为用的 node

HtmlWebpackPlugin 的 template 的文件名是根据执行命令所在路径找的

-D 和-S

webpack-dev-server=>live reload

Vue.config.productionTip = false; 去除提示

手动搭建的找不到 vue 等，需要手动配置 webpack 的解析

起别名，可以加快打包的速度，因为可以直接定位到资源文件。我记得脚手架有默认的

webpack 中的 resolve 和 node 里面 path.resolve 不一样

```js
 // 引入模块的解析
  resolve: {
    extensions: [".js", ".vue", ".json"], // 可以省略的后缀名
    alias: {
      "@": path.resolve("src"),
      "@components": path.resolve("src/components"),
      // 路径别名(简写方式)
      vue$: "vue/dist/vue.esm.js", // 表示精准匹配
    },
  },

```

render 与 template 的比较，。。。。。打包的时候能少 100k（少的就是编译器的代码）

render，内部使用是 vue-template-compliler 提前编译好的模板=>vue-cli3

template，不能使用 vue-template-compliler，因为 vue 默认引入的是不带编译器的打包版本 vue.runtime.common.js（这个可以在 vue 的 package.json 中查找到），解决是让 webpack 打包引入带编译器的版本 vue\$: "vue/dist/vue.esm.js"。=>vue-cli2

组件化编码基本流程：拆分组件，静态组件、动态组件（初始化动态显示，交互）

对象传递的是地址值，一个对象不可能在另一个对象里面

JSON.parse(localStorage.getItem('xxx_key')||'[]')

JSON 理解不到位

vue 的计算属性，默认是返回的 get 方法，添加 set 方法需要

```js
//默认的get 方法
checked() {
      return this.todolist.filter((item) => item.complete).length;
    },
//自定义的set方法
ischeck: {
      get() {
        return this.checked === this.todolist.length;
      },
      set(value) {
        // console.log(value);
        this.isallcheck(value);
      },
    },
```

我写 vue 的时候，老是忘记 this、this、this、this、this。

node_modules=>包名=>package.json=>main

vue 运行时的版本缺编译器

vue.esm=>es6 的模块化

组件间的通信：

1. props。父组件通过 v-bind(:)来指定传递，子组件通过 props 来接受

2. 自定义事件。只适用于子向父。子组件 this.\$emit('myevent),父组件可以在调用是使用 v-on(@):my-event='dosomething'。也可以在 mouted()中使用 this.$refs.ref.$on('my-event',this.dosomething)==>>
   在 beforeDestroy 中要解绑 this.$refs.ref.$on('my-event')

3. 事件总线

   - 给 vue 的原型对象添加一个 vm 对象属性

   Vue.prototype.\$vm = new Vue()

   - 在入口处(index.js) new Vue()中的

   beforeCreate(){
   Vue.prototype.\$vm = this
   }

4. 插槽

5. vuex

vue 的数据

1. vue-resource

2. axios

跨域

devServer 中配置 proxy

```js
proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""},
    changeOrigin: true
  }
}
```

webpack 中配置 babel 让人很难受的是，没有实时的标准答案，你需要自己去摸索，像是 core-js 的作者坐牢了，虽然文档还有人维护，但是我就在想程序员里面现在的相互依赖关系和自然界没什么区别。话说回来，babel/polyfill 已经启用了，需要使用运行时的@babel/runtime 和开发时的@babel/plugin-transform-runtime。

配置如下：

```js

  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
```

记得关了 useBuiltIns 的配置

vuex

嵌套路由中'/'代表是根路径，不写就是此目录的文件路径

```js
/* 
路由器对象模块
*/
import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import MessageDetail from "@/pages/MessageDetail";

// 声明使用vue插件
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", // 去掉路径中的#
  // 应用中所有路由
  routes: [
    // 路由
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home", // path最左边的/代表项目根路径
      component: Home,
      children: [
        // 注册子路由
        {
          name: "news",
          path: "/home/news",
          component: News,
        },
        {
          path: "message", // 相当于: /home/message
          component: Message,
          children: [
            {
              name: "detail",
              path: "/home/message/detail/:id", // 动态路由
              component: MessageDetail,
              // props: true, // 内部自动将接收的parmas参数以标签属性传入路由组件
              props: (route) => ({
                id: route.params.id,
                name: route.query.name,
              }), // 函数返回的对象中的所有属性都会以标签属性传入路由组件
            },
          ],
        },
        {
          path: "",
          redirect: "/home/news",
        },
      ],
    },
    // 自动重定向的路由
    {
      path: "/",
      redirect: "/about",
    },
  ],
});
```

路由组件传参

布尔模式只能传递 params

函数模式可以传递多个

模式解耦

路由模式的问题？

```doc
hsah=>
刷新：http://localhosa:8080/#/about
请求的是http://localhosa:8080，返回给我的是index.htmlyemian
注意#/about不会交给服务器
浏览器得到index的页面后就会得到关联的js
js中的路由代码就会将#about解析为前台路由路径

history=>
刷新：http://localhosa:8080/about
请求后台的http://localhosa:8080/about=>后台处理不了，返回404
解决的思路：在某个路由路径下刷新服务器能返回index页面
配置：
1:devServer中   historyApiFallback: true,请求404返回index页面
2:output:publicPath:'/'=>二级路径有问题要配置这个保证
3:自己引入的文件就需要去掉.

就是要从根路径找需要的资源，不要去相对的找
```

UI 组件

原则：按需引入打包，都是性能优化的要求

这让我想起来，有个人去证券公司的时候，要求是 UI 组件全部手写，不要引入库，为了就是避免过大的包引入，那也同时说明这个公司的这一方面的技术负责人要么不懂按需引入打包，（自己写的组件难免有误），要么就是特别懂。感觉倾向于前者。

mint-ui

```js
npm install babel-plugin-component -D
 "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
上面的二维数组配置要改为对象{}！！！！

import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */
```

移动端的问题：点击穿透和 0.3s 延迟=>fastclick 插件

function(){}

fn()====这是执行 fn 函数

window.fn()====这是调用 window 下的方法

...mapState(['count'])解构等于

{'count'()return{ this.\$store.state['count']}}

count(){return sthis.\$store.state.count}

名字的映射不用数组了，用对象 KeyV 值
