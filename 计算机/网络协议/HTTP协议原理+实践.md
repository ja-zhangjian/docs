---
title: HTTP协议原理+实践
# autoPrev: README
sidebarDepth: 2
---

# HTTP 协议原理+实践

## 学习介绍

学习 http 的重要性，学习的必要性
1.web 开发不理解，但是很重要，也能提高自身价值

2.例子:输入 url 打开网页 、ajax 获取数据、 img 标签加载图片

3.cache-control

4.缓存验证（提高性能）

5.更多有意义的头

6.TCP

7.跳转=>缓存=>DNS=>TCP 连接=>Request=>Response

## HTTP 协议基础及发展历史

### 5 层网络模型介绍（参考 osi 七层）

经典五层【物链网传（会表）应】

物理层：定义物理设备如何传输数据（硬件，光缆，网线等）

数据链路层：在通信实体之间建立数据链路连接（0,1）

网络层：为数据在结点之间传输创建逻辑链路

传输层：

- TCP/IP、UDP
- 为用户提供端到端的服务
- 向高层屏蔽了下层数据通信的细节

应用层：

- 为应用软件提供了很多服务
- 构建于 TCP 协议之上
- 屏蔽了网络传输相关细节

### HTTP 协议发展史

1.HTTP0.9:只有一个 get 命令，没有 HEARER 等描述数据的信息，单次连接，服务器发送完毕，就关闭 TCP 连接

2.HTPP1.0:增加很多命令，增加 status code 和 header，多字符集的支持、多部分发送、权限、缓存等

3.HTPP1.1:持久连接，pipeline（同一个连接，发送多个请求，但是服务端是按照顺序处理连接，串行与并行差异），增加 host（同一个物理服务器跑不同的软件）和其他一些命令

4.HTTP2:所以数据以二进制（帧）传输，同一个连接里面发送多个请求，不在需要按照顺序来处理，头信息压缩以及推送等提高效率的功能。（解决 HTTP1.1 效率低的问题，服务端可以主动发起数据传输，在请求 html 的同时，服务端推送 css，js 到客服端，并行，提高效率）

### HTTP 的三次握手

客服端发送：(标志位)SYN=1，Seq =X

服务端返回：SYN = 1,ACK = X+1,Seq = Y

客户端发送：ACK = Y+1,Seq=Z

由于网络的延迟或者丢失，需要第三次连接来确保连接成功，同时避免服务端开启无用端口资源

### URI、URL 和 URN

URI=URL+URN

- 统一资源标志符，标识互联网上的信息资源

URL

- 统一资源定位器
- http://user:pass@host.com:80/path?query=string#hash

URN

- 永久统一资源定位符，在资源移动之后还能被找到，现没有成熟的方案

### HTTP 报文格式

定义只是规定、规范，没有强约束，但是具体的操作由操作者选择

- 请求报文：

行（请求方法，url，协议版本）

头（传输数据的内容，想要接受数据的内容，格式）

- 响应报文：

行（请求方法，code，明文的方式表达 code 的含义）

头 （传输数据的内容，返回数据的内容，格式）

空行

体（返回内容）

===========

HTTP 方法：定义对于资源的操作

HTTP CODE：服务器对请求的处理结果

===========

### 创建一个简单的 Web 服务

```javascript
//node自带模块,我傻了，这个自动格式化，服了
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const html = fs.readFileSync("test.html", "utf8");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(html);
  })
  .listen(8888);
console.log("监听服务8888");
```

## HTTP 各种特性总览

### HTTP 客户端

浏览器、curl 等等发送 http-content 的工具，不要单纯认为 HTTP 客户端只是浏览器，curl 是 git bash 自带的。

### CORS 跨域请求的限制与解决

1.jsonP

原理：浏览器允许 link、img、script 标签在标签上写（src，href）路径加载内容，和 CDN 引入一个意思

2.Access-Control-Allow-Origin

```javascript
res.writeHead(200, {
  "Access-Control-Allow-Origin": "*",
});
```

不管有没有这个返回头，浏览器都是会发送请求，浏览器不知道服务器是否接受跨域，内容也是返回回来了，只不过浏览器在解析内容时没有发现这个是不允许的时候，就会自己忽略，好像是 1995 年网景公司引入的同源策略。

设置了\*，表示 任何服务都能访问

可以设置某一个特定的域名（浏览器是不认识映射关系的，比如 127.0.0.1 与 localhost），代码逻辑判断多个域名是否允许跨域

### CORS 跨域限制与预请求验证

CORS 预请求

允许方法：只允许 GET\HEAD\POST

允许 content-type： text/plain multipart/from-data application/x-www-form-urlencoded

其他限制：请求头限制

什么是预请求？

```javascript
res.writeHead(200, {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "自定义的请求头",
});
```

浏览器通过 option 获取请求，允许接下来的请求操作

```javascript
res.writeHead(200, {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "自定义的请求头",
  "Access-Control-Max-Age": "1000",
});
```

上面的请求，1000 秒的时间范围内，不需要再次发送预请求

### 缓存 Cahe-Control 的含义和使用

可缓存性：

- public：代表，返回的时候，任何代理，浏览器都可以执行缓存操作
- private: 代表，发起请求的浏览器才可以缓存
- no-cache:使用缓存前先验证

到期：

- max-age = \<seconds>
- s-maxage = \<seconds> 专门为代理服务器设置
- max-stale = \<seconds>发起请求带的头，只要在这个时间内，可以允许读取过期缓存

重新验证：

- must-revalidate 浏览器过期的时候，必须重新获取
- proxy-revalidate 代理服务器过期的时候，必须重新获取

其他：

- no-store 彻底的，永远都要获取新的缓存
- no-transform 代理服务器不允许改动

这些都是规范，完全可以不按照规范去做,但是会出问题
cache-control 属于客户端缓存，只要 url 地址不变。
打包资源的时候，hash 根据资源的内容变化，生成新的 hash 码，来刷新缓存。

```javascript
res.writeHead(200, {
  "Content-Type": "text/javascript",
  "Cache-Control": "max-age=一年的时间,public",
});
```

### Last-Modified 和 Etag 的使用

- Last-Modified 上次修改时间

if-modified-since/in-unmodified-since

对比上次修改时间来验证资源是否需要更新

- Etag 数据签名

IF_MATCH/if-non-match

对比资源的签名来判断是否使用缓存

### cookie 和 session

- cookie

Set-Cookie 设置

下次请求自动带上，键值对，可以设置很多个

max-age 和 expires 设置过期时间、Secure 只在 https 的时候发送、HttpOnly 无法通过 document.cookie 访问，阻止 js 通过 cookie 访问，保证数据安全

domain 可以设置主域名下，子域名都访问时都带上 cookie

使用 cookie 来保存 session，把用户登录的 key 设置到 cookie 里面。拿着 sessionID 对着服务的数据查找用户的数据（不会这么做了，1 服务器压力大，2 服务器需要大量存储用户数据，3 不安全，用户的 id 也是用户数据，存储在客服端不太好

session 只要我没保证能够定位到用户，就算是 session 的实现方法

### HTTP 长连接

1.1 里面的

谷歌浏览器一次性并发 6 个

connection：keeplive/close

http 请求是在 tcp 连接上面进行发送的，一个 tcp 连接可以发送多 http 请求，1.1 里面有先后顺序，所以要并发发送请求。

### 数据协商

客户端协商

Accept 指定我想要的数据类型

Accept-Ecoding 代表数据以什么编码方式来进行传输，数据压缩

Accept-Language

User-Agent 根据这个返回是浏览器页面，还是移动端的页面，适配不同浏览器

服务端协商

Cntent-Type 返回数据的数据格式

Cntent-Ecoding

Cntent-Language

### Redirect

请求时，发现资源不在了

301 永久重定向，就不用在问服务器了，直接跳转，从缓存里面读取，就算服务器改了地址，如果客户端自己不清缓存，那就完蛋，这个应该不常用。

302 临时重定向，还是要问一下服务器

### CSP

Content-Security-Policy(内容安全策略）

限制资源的获取

default-src 全局限制、指定资源类型来限制

报告资源获取越权

## Nginx 代理以及面向未来的 HTTP

### Nginx 的安装和基础代理配置

```javascript
server{
    listen  80;
    server_name 地址；
    location /{
    proxy_pass http://127.0.0.1:8888;
	proxy_set_header HOST $host//修改代理的http头
}
```

### Nginx 代理配置和代理缓存的用处

proxy_cache_path 地址 level=1:2 keyz_zone=名字:10m

proxy_cache 名字

速度快，在代理设置，如果代理缓存设置过了，可以读代理缓存

s-maxage 代理缓存的时间

private 只有浏览器才能缓存

no-store，所有的都不能缓存

Vary 用来只能 http 的头的值相同时，再使用缓存，这个头会存在服务端那边

### HTTPS 解析

HTTP 不安全，明文传输

HTTPS 加密 私钥，公钥

<img :src="$withBase('/计算机/网络协议/https.png')">

### 使用 Nginx 部署 HTTPS 服务

需要生成公钥，私钥

默认端口 443

```javascript
ssl on
ssl_certificate_key
ssl_certificate
```

浏览器需要安全证书，来证明 url 是安全的

### HTTP2 的优势和配置 HTTP2 的简单使用

HTTPS 的优势

信道复用、分帧传输、Server Push

Link;这个请求，服务端可以推送内容（不安全的证书，不接受推送）

Nginx 可以兼容 1.1 和 2，代理服务器可以转化协议给服务器

## 总结

HTTP 原理=》tcp 连接上面传输（三次，四次），长连接，性能提升

HTTP 技术点=》缓存，验证缓存，csp，cors

Nginx 实践、面向未来的 HTTP=》Nginx 好处，HTTP2 的安全，性能提升

<img :src="$withBase('/计算机/网络协议/tcp.png')">

后记：知道就行了，感觉要深入得实操。
