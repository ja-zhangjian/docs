---
title: HTTP协议原理+实践
# autoPrev: README
sidebarDepth: 2
---
# HTTP协议原理+实践

## 学习介绍
学习http的重要性，学习的必要性
1.web开发不理解，但是很重要，也能提高自身价值

2.例子:输入url打开网页 、ajax获取数据、 img标签加载图片

3.cache-control

4.缓存验证（提高性能）

5.更多有意义的头

6.TCP

7.跳转=>缓存=>DNS=>TCP连接=>Request=>Response

## HTTP协议基础及发展历史
### 5层网络模型介绍（参考osi七层）
经典五层【物链网传（会表）应】

物理层：定义物理设备如何传输数据（硬件，光缆，网线等）

数据链路层：在通信实体之间建立数据链路连接（0,1）

网络层：为数据在结点之间传输创建逻辑链路

传输层：
* TCP/IP、UDP
* 为用户提供端到端的服务
* 向高层屏蔽了下层数据通信的细节

应用层：
* 为应用软件提供了很多服务
* 构建于TCP协议之上
* 屏蔽了网络传输相关细节


### HTTP协议发展史
1.HTTP0.9:只有一个get命令，没有HEARER等描述数据的信息，单次连接，服务器发送完毕，就关闭TCP连接

2.HTPP1.0:增加很多命令，增加status code和header，多字符集的支持、多部分发送、权限、缓存等

3.HTPP1.1:持久连接，pipeline（同一个连接，发送多个请求，但是服务端是按照顺序处理连接，串行与并行差异），增加host（同一个物理服务器跑不同的软件）和其他一些命令

4.HTTP2:所以数据以二进制（帧）传输，同一个连接里面发送多个请求，不在需要按照顺序来处理，头信息压缩以及推送等提高效率的功能。（解决HTTP1.1效率低的问题，服务端可以主动发起数据传输，在请求html的同时，服务端推送css，js到客服端，并行，提高效率）
### HTTP的三次握手
客服端发送：(标志位)SYN=1，Seq =X

服务端返回：SYN = 1,ACK = X+1,Seq = Y

客户端发送：ACK = Y+1,Seq=Z

由于网络的延迟或者丢失，需要第三次连接来确保连接成功，同时避免服务端开启无用端口资源
### URI、URL和URN
URI=URL+URN

* 统一资源标志符，标识互联网上的信息资源

URL

* 统一资源定位器
* http://user:pass@host.com:80/path?query=string#hash

URN

* 永久统一资源定位符，在资源移动之后还能被找到，现没有成熟的方案


### HTTP报文格式
定义只是规定、规范，没有强约束，但是具体的操作由操作者选择
* 请求报文：

行（请求方法，url，协议版本）

头（传输数据的内容，想要接受数据的内容，格式）

* 响应报文：

行（请求方法，code，明文的方式表达code的含义）

头 （传输数据的内容，返回数据的内容，格式）

空行 

体（返回内容）

===========

HTTP方法：定义对于资源的操作

HTTP CODE：服务器对请求的处理结果

===========
### 创建一个简单的Web服务
```javascript
//node自带模块
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const html = fs.readFileSync('test.html', 'utf8')
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(html)
}).listen(8888)
console.log('监听服务8888');
```

## HTTP各种特性总览
### HTTP客户端
浏览器、curl等等发送http-content的工具，不要单纯认为HTTP客户端只是浏览器，curl是git bash自带的。
### CORS跨域请求的限制与解决
1.jsonP

原理：浏览器允许link、img、script标签在标签上写（src，href）路径加载内容，和CDN引入一个意思

2.Access-Control-Allow-Origin
```javascript
 res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
```
不管有没有这个返回头，浏览器都是会发送请求，浏览器不知道服务器是否接受跨域，内容也是返回回来了，只不过浏览器在解析内容时没有发现这个是不允许的时候，就会自己忽略，好像是1995年网景公司引入的同源策略。

设置了\*，表示 任何服务都能访问

可以设置某一个特定的域名（浏览器是不认识映射关系的，比如127.0.0.1与localhost），代码逻辑判断多个域名是否允许跨域



### CORS跨域限制与预请求验证
CORS预请求

允许方法：只允许GET\HEAD\POST

允许content-type： text/plain multipart/from-data application/x-www-form-urlencoded

其他限制：请求头限制 

什么是预请求？
```javascript
res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '自定义的请求头'
  })
```

浏览器通过option获取请求，允许接下来的请求操作

```javascript
res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '自定义的请求头',
     'Access-Control-Max-Age': '1000',
  })
```
上面的请求，1000秒的时间范围内，不需要再次发送预请求
### 缓存Cahe-Control的含义和使用
可缓存性：
* public：代表，返回的时候，任何代理，浏览器都可以执行缓存操作
* private: 代表，发起请求的浏览器才可以缓存
* no-cache:任何都不可以缓存

到期：
* max-age = \<seconds>
* s-maxage = \<seconds> 专门为代理服务器设置
* max-stale = \<seconds>发起请求带的头，只要在这个时间内，可以允许读取过期缓存

重新验证：
* must-revalidate 浏览器过期的时候，必须重新获取
* proxy-revalidate 代理服务器过期的时候，必须重新获取

其他：
* no-store 彻底的，永远都要获取新的缓存
* no-transform代理服务器不允许改动

这些都是规范，完全可以不按照规范去做,但是会出问题
cache-control属于客户端缓存，只要url地址不变。
打包资源的时候，hash根据资源的内容变化，生成新的hash码，来刷新缓存。
```javascript
res.writeHead(200, {
   'Content-Type':'text/javascript',
   'Cache-Control':'max-age=一年的时间,public'
  })
```
### Last-Modified和Etag的使用

### cookie和session
### HTTP长连接
### 数据协商
### Rediret
### CSP

## Nginx代理以及面向未来的HTTP

## 总结


<img :src="$withBase('/计算机/网络协议/tcp.jpg')">
