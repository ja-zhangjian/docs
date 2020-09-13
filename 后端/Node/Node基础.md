---
title: Node基础
# autoPrev: README
sidebarDepth: 0
---

# Node 基础

> 写在前面，从入门到走错门。

> Node.js 是一个开源与跨平台的 JavaScript 运行时环境。

## 1、global(全局变量)

1.  有些内置对象是 JavaScript 语言本身的一部分，它们也是全局可访问的，比如 console.log()和 setTimmeout。除了 global 模块中的内容可以直接使用，其他模块都是需要加载的。

2.  \_\_dirname 当前文件夹的绝对路径
3.  require 引入模块

```js
const fs = require("fs");
```

## 2、fs(文件系统)

### (1)、fs.readFile(path[, options], callback)

异步地读取文件的全部内容

path=>文件路径

options=>如果没有指定字符编码，则返回原始的 buffer，如果 options 是字符串，则它指定字符编码

callback=>回调

```js
// 在 macOS、Linux 和 Windows 上：
fs.readFile("<目录>", (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <目录>]
});
```

fs.readFile() 函数会缓冲整个文件。 若要最小化内存成本，则尽可能选择流式（使用 fs.createReadStream()）。

### (2)、fs.writeFile(file, data[, options], callback)

注意： 写文件的时候，会把原来的内容给覆盖掉

```js
fs.writeFile("文件.txt", data, (err) => {
  if (err) throw err;
  console.log("文件已被保存");
});
```

### (3)、fs.appendFile(path, data[, options], callback)

```js
//参数1：追加的文件名(如果文件不存在，会自动创建)
//参数2：追加的文件内容（注意：写入的内容会覆盖以前的内容）
//参数3：追加文件后的回调函数
fs.appendFile("3.txt", "我是追加的内容", function(err) {
  if (err) {
    return console.log("追加文件内容失败");
  }
  console.log("追加文件内容成功");
});
```

### (4)文件同步与异步的说明

> fs 中所有的文件操作，都提供了异步和同步两种方式

异步方式：不会阻塞代码的执行

```js
//异步方式
var fs = require("fs");

console.log(111);
fs.readFile("2.txt", "utf8", function(err, data) {
  if (err) {
    return console.log("读取文件失败", err);
  }
  console.log(data);
});
console.log("222");
```

同步方式：会阻塞代码的执行

```js
//同步方式
console.log(111);
var result = fs.readFileSync("2.txt", "utf-8");
console.log(result);
console.log(222);
```

## 3、path 模块

```js
path.join();//拼接路径
const path2 = path.join(__dirname,'data.txt')   ok
const path2 = path.join(__dirname,'/data.txt')  ok
const path2 = path.join(__dirname,'./data.txt') ok
```

## 4、http 模块

```js
//1. 导入http模块，http模块是node的核心模块，作用是用来创建http服务器的。
var http = require("http");

//2. 创建服务器
var server = http.createServer();

//3. 启动服务器，监听某个端口
server.listen(3001, function() {
  console.log("服务器启动成功了, 请访问： http://localhost:3001");
});

//4. 服务器处理请求
server.on("request", function() {
  console.log("我接收到请求了");
});
```

- request

1. request.url
2. request.method
3. request.headers

- response

1. res.write(data): 给浏览器发送请求体，可以调用多次，从而提供连续的请求体
2. res.end(); 通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。
3. res.end(data); 结束请求，并且响应一段内容，相当于 res.write(data) + res.end()
4. res.statusCode: 响应的的状态码 200 404 500
5. res.statusMessage: 响应的状态信息， OK Not Found ,会根据 statusCode 自动设置。
6. res.setHeader(name, value); 设置响应头信息， 比如 content-type
7. res.writeHead(statusCode（字符串）, statusMessage, options); 设置响应头，同时可以设置状态码和状态信息。

## 5、MIME 模块

- MIME(Multipurpose Internet Mail Extensions)多用途 Internet 邮件扩展类型 是一种表示文档性质和格式的标准化方式
- 浏览器通常使用 MIME 类型（而不是文件扩展名）来确定如何处理文档；因此服务器将正确的 MIME 类型附加到响应对象的头部是非常重要的

> Resource interpreted as Stylesheet but transferred with MIME type text/plain: "http://localhost:3001/anoceanofsky.css".
>
> \* .index.html => text/html
>
> \* .XXX.css ==> text/css
>
> \* .jpg ===> image/jpeg

- 作用：获取文件的 MIME 类型
- 安装：`npm i mime`

```js
let mime = require("mime");

// 获取路径对应的MIME类型
mime.getType("txt"); // ⇨ 'text/plain'
// 根据MIME获取到文件后缀名
mime.getExtension("text/plain"); // ⇨ 'txt'
```

- 代码

```js
server.on("request", (req, res) => {
  //1. 设置 mime 类型
  res.setHeader("content-type", mime.getType(req.url));

  // index.html
  //2. 读取
  fs.readFile(path.join(__dirname, "./pages-apache", req.url), (err, data) => {
    res.end(data);
  });
});
```
