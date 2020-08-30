---
title: Vue深精透
# autoPrev: README
sidebarDepth: 2
---
# Vue深精透
## vue核心知识
### 1.小准备
runtime-only的代码无法编译Vue对象里面的template

应该使用vue.esm.js,并且起别名，方便 import vue from "vue"
```javscript
 config.resolve = {
        alias: {
          'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
      }
```
新建一个templa.html的模板
```javascript
 new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
```
### 2.vue的实例
new Vue上面的属性

$data

$props

$el

$options：上面的render方法，只能在渲染后再发起作用，(这里不能修改data的数据，内部做过修改)

$root：vue的实例，根实例，就是new的对象

$children：子组件

$slots\$scopedSlots：插槽

$refs： 定位模板的节点

$isServer：服务端渲染用到

new Vue上面的方法

$watch ：监听(这个和options里面写是一样的，写在options里面，可以在组件销毁的时候顺带自动销毁，当然也可以使用实例对象.$watch的返回方法来销毁)

$on： 事件监听

$emit：触发事件 和上面的$on必须监听同一个Vue对象，才能触发

$once：只监听一次

$forceUpdate： 强制渲染，这个很有问题，性能低。

$set：弥补,给对象添加属性

$delete：删除

$destory：主动销毁，不常用

$nextTick({})：事件队列，异步渲染。
### 3.vue组件（对象）的生命周期

beforeCreate(){}==el为undefined 

created(){}==el为undefined

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =服务器能调用

beforeMount(){}==el为模板

>这里执行render的方法
>
>renderError 开发环境可用
>
>errorCaptured 向上冒泡，正式环境可用

mounted(){} ==el被替换

挂载入的时候，没有el的属性可以通过$mount()

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =服务器调用不了，这个和dom有关

beforeUpdate(){}

updated(){}

数据更新、覆盖的时候

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

activated(){}、

deactivated(){}

组件的keepalive中触发

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

beforeDestory(){}拿不到了el

destoryed(){}拿不到了el

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
### 4.vue的数据绑定

字符串显示、可以做一些简单计算，或者是一行语句有返回结果的运算、支持调用原生js的方法，但是不支持自定义的全局对象，可以使用window上的对象
### 5.computed和watch的使用场景和方法
computed:计算属性，实际是调用get方法，这一块有缓存，降低消耗。与methods不同，它不需要在每次页面渲染的时候就执行，它依赖的值改变，它才计算渲染。如果你的值需要大量计算才得到，那么缓存的意义就很大。

>尽量不要不要用computed的set方法，逻辑复杂，减少计算重复

watch:监听数据，初始绑定不执行。但是可以设置immediate：true来调用立即执行的handler()方法，deep：true，深入观察，遍历对象，发生改变就能监测到，这个我觉得应该和vue2.X的绑定原理有关系，Object.defineProperty()的缺陷，只有修改一个对象的现有属性，才返回此对象。这边也可以监测字符串，这样监测的就不是对象了，也不用加deep;true来深入观察。
### 6.vue的原生指令
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
### 7.vue的组件定义
~~~js
CompOne
<comp-one></comp-one>
data(){
    return{
        //局部对象
    }
}
props：{}
~~~

### 8.vue的组件继承

### 9.vue的组件自定义双向绑定

### 10.vue的组件高级属性

### 11vue的组件render function



