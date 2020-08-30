---
title: BigNews
# autoPrev: README
autoNext: README
---
# BigNews
## 第一天
>1. form的表单注册submit事件
```javascript
$(dom).on("submit",function(e){
    //阻止表单的默认提交事件
    e.preventDefault()
    $.ajax({
        type:'',
        url:'',
        data:$(this).serialize(),
        success:function(res){
            console.log(res)
        }   
    })
})
```
当form表单中的提交按钮是button标签的时候，也会触发form表单的默认提交行为

一定要注意，无论是button按钮还是submit按钮，一定是要在form表单内部嵌套的

表单序列化，要有name属性并且与接口相同

此事件只能给form表单来注册，只能通过两个按钮来触发

- \<input type="submit" id="btn">
- \<button>提交</button>

>2. 设置token和本地存储
```javascript
  beforeSend:function(xhr){
        xhr.setRequestHeader('Authorization',localStorage.getItem('token'))
    }
```
本地存储
```javascript
// 给本地存储存入数据
localStorage.setItem(key,value) // value必须是字符串
例： localStorage.setItem('aa','bbb')

// 获取本地存储中的数据
localStorage.getItem(key)
例:  localStorage.getItem('aaa')

// 删除本地存储中的某一项
localStorage.removeItem(key)
例: localStorage.removeItem('aaa')

// 清除本地存储中的所有项
例：localStorage.clear()
```
>3.全局ajax函数、防翻墙和退出
~~~js
//这个放到应用的jq.js里面，在调用ajax的时候，会在调用之前执行
$.ajaxSetup({
	beforeSend:function(xhr){
		xhr.setRequestHeader('Authorization',localStorage.getItem('token'))
	}
})
~~~
除了登陆外，不允许未登录就发送请求
~~~js
$.ajaxSetup({
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'))
    },
    error: function (xhr, status, err) {
        // console.log(xhr); // 异步对象
        // console.log(status); // 错误信息
        // console.log(err); // 错误提示内容
        // 开启防翻墙 就是说没有登陆的时候，是不能够访问后台系统的其它页面的，必须先登陆
        if (err == 'Forbidden') {
            // 如果被禁止了，就说明 没有登陆过 ，应该先跳转到登陆页面进行登陆
            window.location.href = './login.html'
        }
    }
})
~~~
同时我们需要在用户退出登录后，删除localstorage里面的token，保证安全。
~~~js
 window.localStorage.removeItem('token')
~~~

## 第二天
>1.jq的toggle
~~~js
  //点击的元素添加active，其兄弟元素是div类型的去除active
  $(this).addClass('active').siblings('div').removeClass('active')
  
  //类似于卷帘门的效果，display:none/block
  $('.menu .level02').slideToggle()
  
  //单个元素添加移除属性
  $(this).find('b').toggleClass('rotate0')
  
  //触发器事件，也可以直接添加属性
  $('.menu .level02 li:eq(0)').click()
~~~
>2.接口文件提取
  大型项目接口多的时候，需要提取到公共文件中以方便维护

  ~~~js
/* 沙箱模式 */
(function(w){
  var baseURL = 'http://localhost:8080/api/v1'
  var BigNew = {
      baseURL:baseURL,//基地址
      user_login:      baseURL + '/admin/user/login',//用户登录
  };
  //暴露接口
  w.BigNew = BigNew;
})(window);
  ~~~

>3.json数据转换

* 将json形式的对象转换成字符串   JSON.stringify()

* 将json形式的字符串转换成对象  JSON.parse()
## 第三天



## 第四天
## 第五天
## 第六天