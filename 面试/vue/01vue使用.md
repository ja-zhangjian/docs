---
# navbar: false
title: vue使用
# sidebarDepth: 2
---

# vue 使用

## vue 使用-考点串讲

- 基本使用，组件使用-常用

- 高级特性-不常用，但是体现深度

- vuex 和 vue-router 使用

题目：

1. v-show 和 v-if 的区别

2. v-for 中为什么要用 key

3. 描述 vue 组件生命周期（有父子组件的情况）

4. vue 组件如何通讯

5. 描述组件渲染和更新的过程

6. 双向数据绑定 v-model 的实现原理

## vue 基本知识点串讲 part1&part2

1. 指令、插值

- 插值、表达式
- 指令、动态属性
- v-html:会有 XSS 风险，会覆盖组件

2. computed 和 watch

- computed 有缓存，data 不变则不会重新计算
- watch 如何深度监听
- watch 监听引用类型，拿不到 oldval

3. class 和 style

- 使用动态属性：对象和数组写法
- 使用驼峰写法

4. 条件渲染

- v-ifv-else 的用法，可使用变量，也可以使用===表达式
- v-if 和 v-show 的区别
- v-if 和 v-show 的使用场景

5. 循环（列表）渲染

- 如何遍历对象？——v-for
- key 的重要性。key 不能乱写（如 random 或者 index）
- v-for 和 v-if 不能一起使用（不建议）=>v-for 的优先级比 v-if 高

6. 事件

- event 参数，自定义参数=>原生的 event 对象与 React 对比，事件被挂载到当前元素
- 事件修饰符（stop、stop/submit.prevent、capture、self），按键修饰符（ctrl、ctrl.exact、exact）
- 【观察】事件被绑定到哪里？

7. 表单

- v-model
- 常见表单项 textarea、checkbox、radio、select（multiple 多选）

```
<textarea>{{desc}}</textarea>//!!!是不允许的！
```

- 修饰符 lazy、number、trim

## vue 父子组件如何通讯

## 如何用自定义事件进行 vue 组件通讯

## vue 父子组件生命周期调用顺序

1. vue 组件使用

- props 和\$emit
- 组件间通讯-自定义事件\$emit$on$off（在生命周期销毁时及时解绑，防止内存泄露）
- 组件生命周期
  - 创建、挂载、更新、激活、销毁、errorCaptured（2.5.0+） 、errorHandler
  - 创建是先父后子
  - 挂载是先子后父
  - 更新前是先父后子
  - 更新后是先子后父

> 加载渲染过程

> 同步引入时生命周期顺序为：

> 父组件的 beforeCreate、created、beforeMount --> 所有子组件的 beforeCreate、created、beforeMount --> 所有子组件的 mounted --> 父组件的 mounted

> 总结：父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载

> 若有孙组件呢？

> 父组件先 beforeCreate => created => beforeMount ,

> 然后子组件开始 beforeCreate => created => beforeMount ，

> 然后孙组件 beforeCreate => created => beforeMount => mounted，

> 孙组件挂载完成了，

> 子组件 mounted，

> 父组件再 mounted

> 异步引入时生命周期顺序为：

> 父组件的 beforeCreate、created、beforeMount、mounted --> 子组件的 beforeCreate、created、beforeMount、mounted

> 总结：父组件创建，父组件挂载；子组件创建，子组件挂载。

> 子组件更新过程

> 父 beforeUpdate->子 beforeUpdate->子 updated->父 updated

> 父组件更新过程

> 父 beforeUpdate->父 updated

> 销毁过程

> 父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed

## vue 高级特性

1. 自定义 v-model
2. \$nextTick
3. slot
4. 动态、异步组件
5. keep-alive
6. mixin

```vue
<template>
  <div>
    <p>vue 高级特性</p>
    <hr />
    <!-- 自定义 v-model -->
    <p>{{ name }}</p>
    <CustomVModel v-model="name" />
    <!-- nextTick -->
    <NextTick />
    <!-- slot -->
    <SlotDemo :url="website.url">
      {{ website.title }}
    </SlotDemo>
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{ slotProps.slotData.title }}
      </template>
    </ScopedSlotDemo>
    <!-- 动态组件 -->
    <component :is="NextTickName" />
    <!-- 异步组件 -->
    <FormDemo v-if="showFormDemo" />
    <button @click="showFormDemo = true">show form demo</button>
    <!-- keep-alive -->
    <KeepAlive />
    <!-- mixin -->
    <MixinDemo />
  </div>
</template>
<script>
import CustomVModel from './CustomVModel'
import NextTick from './NextTick'
import SlotDemo from './SlotDemo'
import ScopedSlotDemo from './ScopedSlotDemo'
import KeepAlive from './KeepAlive'
import MixinDemo from "./MixinDemo";
export default {
  components: {
    CustomVModel
    NextTick
    SlotDemo,
    ScopedSlotDemo,
    FormDemo: () => import('../BaseUse/FormDemo'),
    KeepAlive
    MixinDemo,
  },
  data() {
    return {
      name: "your name",
      website: {
        url: "http://baidu.com/",
        title: "baidu",
        subTitle: "百度一下",
      },
      NextTickName: "NextTick",
      showFormDemo: false,
    };
  },
};
</script>
```

## vue 如何自己实现 v-model

1. 自定义 v-model

```vue
<template>
  <input
    type="text"
    :value="text1"
    @input="$emit('change1', $event.target.value)"
  />
  <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
  model: {
    prop: "text1", // 对应 props text1
    event: "change1",
  },
  props: {
    text1: String,
    default() {
      return "";
    },
  },
};
</script>
```

## vue 组件更新之后如何获取最新 DOM

2. \$nextTick
   ref='name'=>this.\$refs.name

```vue
<template>
  <div id="app">
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: ["a", "b", "c"],
    };
  },
  methods: {
    addItem() {
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);

      // 1. 异步渲染，$nextTick 待 DOM 渲染完再回调
      // 3. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
      this.$nextTick(() => {
        // 获取 DOM 元素
        const ulElem = this.$refs.ul1;
        // eslint-disable-next-line
        console.log(ulElem.childNodes.length);
      });
    },
  },
};
</script>
```

## slot 是什么

3. slot

```vue
<template>
  <a :href="url">
    <slot>
      默认内容，即父组件没设置内容时，这里显示
    </slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  },
};
</script>
```

```vue
<template>
  <a :href="url">
    <slot :slotData="website">
      {{ website.subTitle }}
      <!-- 默认值显示 subTitle ，即父组件不传内容时 -->
    </slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        url: "http://Google.com/",
        title: "Google",
        subTitle: "谷歌",
      },
    };
  },
};
</script>
```

  <img :src="$withBase('/面试/具名插槽.png')">

## vue 动态组件是什么

## vue 如何异步加载组件

4. 动态、异步组件

- :is="component-name"用法
- 需要根据数据，动态渲染的场景，即组件类型不确定

异步组件

- import()函数

  FormDemo: () => import('../BaseUse/FormDemo'),

- 按需加载，异步加载大组件

## vue 如何缓存组件

5. keep-alive

- 缓存组件

- 频繁切换，不需要重复渲染

- vue 常见性能优化

## vue 组件如何抽离公共逻辑

6. mixin

- 多个组件有相同的逻辑，抽离出来

mixins:[myminix]

- mixin 并不是完美的解决方案，会有一些问题

  - 变量来源不明确，不利于阅读

  - 多 mixin 可能会造成命名冲突（生命周期不会）

  - mixin 和组件可能出现多对多的关系，复杂度较高

- vue3 提出的 Composition API 旨在解决这些问题

## vue 高级特性知识点小结

- 自定义 v-model
- \$nextTick
- slot
- 动态、异步组件
- keep-alive
- mixin

## vuex 知识点串讲

基本概念

- state
- getters
- action
- mutation

用于 vue 组件

- dispatch

- commit

- mapState

- mapGetters

- mapActions

- mapMutations

 <img :src="$withBase('/面试/vuex.png')">

Actions 中才能做异步操作

Mutations 原子，同步

## vue-router 知识点串讲

- 路由模式(hash 、H5 history)

  - hash 模式（默认），如 http：//abc.com/#/user/10
  - H5 history 模式，如 http：//abc.com/user/10
  - 后者需要 server 端支持，因此无特殊需求可选择前者

- 路由配置（动态路由、懒加载）
  - :id
  - \$route.params.id
  - component:()= import

## vue 使用-考点总结和复习
