---
title: vuessr
# autoPrev: README
# autoNext: README
---

# vuessr
##   服务端渲染
### 1开发时服务端渲染的配置和原理
<img :src="$withBase('/项目/服务端渲染.png')">

### 2使用koa实现node server
### 3服务端渲染的entry配置
### 4开发时服务端渲染静态资源路径处理
### 5使用vue-meta处理元信息
### 6生产环境服务端渲染
## vue 核心知识

### 1.小准备

runtime-only 的代码无法编译 Vue 对象里面的 template

应该使用 vue.esm.js,并且起别名，方便 import vue from "vue"

```javscript
 config.resolve = {
        alias: {
          'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
      }
```

新建一个 templa.html 的模板

```javascript
 new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
```

### 2.vue 的实例

new Vue 上面的属性

\$data

\$props

\$el

\$options：上面的 render 方法，只能在渲染后再发起作用，(这里不能修改 data 的数据，内部做过修改)

\$root：vue 的实例，根实例，就是 new 的对象

\$children：子组件

$slots\$scopedSlots：插槽

\$refs： 定位模板的节点

\$isServer：服务端渲染用到

new Vue 上面的方法

$watch ：监听(这个和options里面写是一样的，写在options里面，可以在组件销毁的时候顺带自动销毁，当然也可以使用实例对象.$watch 的返回方法来销毁)

\$on： 事件监听

$emit：触发事件 和上面的$on 必须监听同一个 Vue 对象，才能触发

\$once：只监听一次

\$forceUpdate： 强制渲染，这个很有问题，性能低。

\$set：弥补,给对象添加属性

\$delete：删除

\$destory：主动销毁，不常用

\$nextTick({})：事件队列，异步渲染。

### 3.vue 组件（对象）的生命周期

beforeCreate(){}==el 为 undefined

created(){}==el 为 undefined

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =服务器能调用

beforeMount(){}==el 为模板

> 这里执行 render 的方法
>
> renderError 开发环境可用
>
> errorCaptured 向上冒泡，正式环境可用

mounted(){} ==el 被替换

挂载入的时候，没有 el 的属性可以通过\$mount()

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =服务器调用不了，这个和 dom 有关

beforeUpdate(){}

updated(){}

数据更新、覆盖的时候

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

activated(){}、

deactivated(){}

组件的 keepalive 中触发

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

beforeDestory(){}拿不到了 el

destoryed(){}拿不到了 el

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

### 4.vue 的数据绑定

字符串显示、可以做一些简单计算，或者是一行语句有返回结果的运算、支持调用原生 js 的方法，但是不支持自定义的全局对象，可以使用 window 上的对象

### 5.computed 和 watch 的使用场景和方法

computed:计算属性，实际是调用 get 方法，这一块有缓存，降低消耗。与 methods 不同，它不需要在每次页面渲染的时候就执行，它依赖的值改变，它才计算渲染。如果你的值需要大量计算才得到，那么缓存的意义就很大。

> 尽量不要不要用 computed 的 set 方法，逻辑复杂，减少计算重复

watch:监听数据，初始绑定不执行。但是可以设置 immediate：true 来调用立即执行的 handler()方法，deep：true，深入观察，遍历对象，发生改变就能监测到，这个我觉得应该和 vue2.X 的绑定原理有关系，Object.defineProperty()的缺陷，只有修改一个对象的现有属性，才返回此对象。这边也可以监测字符串，这样监测的就不是对象了，也不用加 deep;true 来深入观察。

### 6.vue 的原生指令

    v-text
    v-html
    v-show display
    v-if 不存在dom，动态增删节点
    v-for 加:key,渲染节点复用
    v-bind
    v-on
    v-class
    v-style
    v-model 默认用在input
    v-pre
    v-cloak
    v-once

### 7.vue 的组件定义

```js
CompOne
<comp-one></comp-one>
data(){
    return{
        //局部对象
    }
}
props：{}
```

### 8.vue 的组件继承

```js
Vue.extend();
propsData: {
}
特例;
```

先用父组件，在用子组件

可以用$parent的属性改变父组，$parent 是可以改变的(必须在 new 的时候)，不推荐，脑子会乱，循环渲染的问题。

### 9.vue 的组件自定义双向绑定

子组件：props 承接父组件，改变值的时候，发射方法到父组件，父组件用 v-model 绑定 value 的值。

### 10.vue 的组件高级属性

匿名插槽

具名插槽

作用域插槽
(slot-scope 指令)

少用\$refs 修改 vue 的实例

provide(){return } 默认不提供双向绑定的属性，需要自定义

```js
Object.defineProperty(data, "value", {
  get: () => this.value,
  enumerable: true,
});
```

inject:[]

尽量别用，vue3 用代理了

### 11vue 的组件 render function

```js
//createElement虚拟dom
render(createElement){
    return createElement(dom,{
     //属性赋值
    },)
}
```

## Vue-Router 和 Vuex

### Vue-router 集成

```js
export defult ()=>{
    return new Router({
        routes
    })
}
```

为了服务端渲染，防止内存溢出。

### Vue-router 配置

```js
{
   path:'/',
   redirect:'/app'
}
```

```js
export defult()=>{
    return new Router({
        routes,
        mode:'history',
        base:'',
        linkActiveClsaa:'',
        linkExactActiveClass:'',//子集
        scrollBehavior(to,from,savedPosition){
            if(savedPosition){
                return savedPosition
            }else{
                return{x:0 ,y:0}
            }
        },//保存滚动位置
        fallback:ture,//转hash模式跳转，自动处理
        parseQuery(query){},
        stringifyQuery(obj){},
    })
}
```

#不被 seo 解析

### Vue-router 路由参数传递

name 属性

meta

children 数组

transition 路由显示隐藏的效果

：变量 \$route.params{} query

props:true 推荐这么做

### Vue-router 导航守卫

全局导航守卫

router.beforEach((to,from,next)=>{})

router.beforResolve()

router.afterEach()

路由配置的钩子 beforeEnter(){}

组件内部的钩子

beforeRouteEnter(){}

beforeRouteUpdate(){}

beforeRouteLeave(){}

### VueX 集成
new store=>这个不就是脚手架生成的吗？
### VueXstate 和 getters
默认的state抽离出来

getters相当于组件的computed，数据的预处理

问题：,,,在babel的env环境中可能不支持，安装babel-presetstag-1
### VueXmutation 和 action
store.commit传入额外的参数，即 mutation 的 载荷(payload)

开发环境设置strict为true，严禁从外部修改store的状态
### VueX 模块
Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

namespaced: true

root: true

模块热重载
### VueX 其他 api 和配置
 解绑、watch、subscribe、subscribeAction，自定义插件
<img :src="$withBase('/项目/vuex.png')">