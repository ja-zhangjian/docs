---
title: vue+webpack打造todo应用
autoPrev: README
# autoNext: README
---
# vue+webpack打造todo应用
前端工程

webpack
(减少网络请求，压缩静态资源，利用浏览器长缓存)

vue

前端的价值：性能要求不高，要求工程化
* 搭建前端工程，不再是所见即所得了
* 网络优化，加快速度，读取缓存
* API定制，前后端分离（不要做被忽悠的一方）
* nodejs层 转发数据，做数据处理中间层

新建文件夹，初始化项目
vue-loader需要peer第三方依赖 css-loader vue-template-compiler`
``` sh
npm i -y
npm i webpack webpack-dev-server webpack-cli --save-dev//开发模式
npm i vue vue-loader css-loader vue-template-compiler --save//运行模式
```
