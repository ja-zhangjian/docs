# ES6
## let
1. 变量不能重复声明
2. 块级作用域（全局，函数，eval）
3. 不存在变量提升
4. 不影响作用域链

PS：就是设计var的各种问题，现在来修正。。。。。。
## const
定义常量，值不能修改的量称为常量

1. 声明和赋值同时
2. 潜规则，常量大写
3. 常量不能修改
4. 块级作用域
5. 对于数据和对象的元素修改，不算是对常量的修改。（引用类型的地址）
## 变量的解构赋值
1. 数组的解构
2. 对象的解构
## 模板字符串
\`字符串`

1. 内容出现换行符
2. 拼接${}
## 简化对象写法
对象加强写法，在大括号内，同名属性和方法可以省略
~~~js
name,
run,
improve(){},
improve：function(){},//等价于上面的
~~~
## 箭头函数
=>省略function

1. this是静态，指向函数声明时所在作用域下的this的值，call不动，改不了，老牛了
2. 不能作构造实例化对象
3. 不能使用arguments变量，这个都不能用。。。。。
4. 简写，一个参数时，小括号；代码体就一句话时候，return也得省，花括号
5. 函数参数的默认值add(a,b,c=10)
## rest参数
获取函数的实参，代替arguments=>对象

...args=>数据，必须放在参数最后
## spread扩展运算符
[...]，调用的时候

数组克隆，里面要是有引用类型，也是浅拷贝

伪数组转真数组...，这个感觉和Array.form类似
## Symbol
1. 值唯一
2. 不能与其他数据运算
3. 定义的对象属性不能for...in，可以用 Reflect.ownKeys
4. USONB you are so niubility
~~~js
u undefined
s string symbol
o object
n null number
b boolean
~~~
5. Symbol内置值
## 迭代器
1. 提供for...of消费的接口
2. for..in是键名，for..of是键值
3. 创建一个指针对象，指向数据结构的起始位置，每次调用都返回一个value和done
4. 自定义遍历数据
## 生成器
1. 生成器就是一个特殊的函数，异步编程。
~~~js
function *gen(){
    yield 'yield是函数代码的分隔符1'；
    yield 'yield是函数代码的分隔符2'；
    yield 'yield是函数代码的分隔符3'
}
let iterator = gen()
iterator.next()
for(let v of gen()){
    console.log(v)
}
//返回yield后面的结果
~~~
2. 参数传递 next中传的参数当做上一次yield的返回结果，解决回调地狱
## Promise
~~~js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
     reject('bar');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
},(reason)=>{
     console.log(reason);
});
//MDN的全，我就记得all和race，字面意思，race我觉得都不常用
~~~
## Set
1. 新的数据结构Set(集合)，成员值是唯一的（数组去重，交并补）
2. size=>元素个数
3. add=>新增
4. delete=>删除
5. has=>检测
6. clear=>清空
7. for...of遍历（iterator的接口）扩展运算符
## Map
1. Map数据结构，键值对的集合
2. set=>添加（‘键名’，'键值'）
3. size
4. delete
5. get=>获取
6. clear
7. for...of遍历（iterator的接口）扩展运算符
## class类
~~~js
class Phone {
 //构造方法
 constructor(brand, color, price) {
 this.brand = brand;
 this.color = color;
 this.price = price;
 }
 //对象方法
 call() {
	 console.log('我可以打电话!!!')
  	} 
 }
~~~
1. class的静态成员=>static
2. 继承 extends super
3. get/set，set要有个参数，我怎么觉得特别像java的实体类的方法
## 数值扩展
1. Number.EPSILON是js表示的最小精度，用于浮点数计算，这个好，我以前计算浮点的时候，出问题，我都不知道怎么解决。
2. 二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。
3. Number.isFinite() 用来检查一个数值是否为有限的
4. Number.isNaN() 用来检查一个值是否为 NaN
5. ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变。
6. Math.trunc用于去除一个数的小数部分，返回整数部分。
7. Number.isInteger() 用来判断一个数值是否为整数
8. Math.sign 判断一个数到底为正数、负数还是零
## 对象扩展
1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
2. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象，后面覆盖前面的，这个和webpack的merge是不是有联系，vue的混入有联系？
3. \__proto__、setPrototypeOf，setPrototypeOf 可以直接设置对象的原型

## 模块化
1. commonjs、AMD、CMD
2. export、import
