# Vue 电影
## vue基础
v-show:隐藏显示

v-if:增删dom，不推荐

:class=“对象”，缺点，新增的对象不顶用，老问题了数据劫持失败

:class=“数组”，没上面的问题了

>想到一个面试题：js中数组有多少种方法，如何分类=>以返回值来区别，回头还要再扣一扣

v-for="(item,index) in/of items" index=>索引值（数组对象都一样）

:key="item.id" 理想中的key值是每一项都有且唯一的id，节点复用

push、pop、shift、unshift、splice、sort、reverse能够监测变动

concat、filter、slice、map新数组换旧数组，需要重新赋值

特殊的=>通过索引值修改数组，也无法监测变动，可以通过Vue.set或者splic(0,1,“修改的值”)

input框下面的@input事件=>只要Value改变，就会触发，@change=>只要失去焦点就会触发。

v-model数据绑定

filter 返回真值，indexOf字符串查找(查不到就是-1，查到返回坐标)

阻止冒泡事件=>事件修饰符=>.stop

阻止默认行为=>.prevent

.self=>只有事件源是自己才触发，这个我还没用过

.once一次性

.enter=>按键修饰符

v-model 双向数据绑定，checkbox绑定的是Boolean值；多选项绑定数组，同时要加上value值。单选绑定字符串，也要加上value

.lazy=>失去焦点触发

.number=>限制数字输入，如果开始输入的是字符，就失效了，也是鸡肋，还是在type上限制number靠谱

.trim

fetch：标准
>看到这的时候，我在想项目获取数据如何得到，翻了翻后面的视频，我觉得我之前http的知识知道是知道，但是不会用 ，对于别人的网站获取数据，此网站支持所有请求的跨域，但在请求头上自定义自己可接受的请求头信息，才支持跨域，减少了很多恶意请求。讲的知识点，还是要应用到实际才印象深刻，脑子不灵光，下次一定记住。
~~~js
fetch（url）.then(res=>res.json())
			.then(res=>console.log(res))
//类似promise，.then的链式调用	
//第一个then返回的是请求头信息（行、头、体）
~~~

axios：推荐

axios会自动的包装一个data属性

computed：老生常谈了，性能比methods要高，有缓存，为什么？源码哪里还没看到，打个标记，记得看。

















