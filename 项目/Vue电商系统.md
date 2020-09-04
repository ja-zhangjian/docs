# Vue 电商系统

## 第 1 章 课程简介

node 安装、升降级

## 第 2 章 Git 安装和配置

<img :src="$withBase('/项目/Git速查.png')">

## 第 3 章 Vue Cli4.0 安装和使用

```js
npm install -g @vue/cli
```

vue create projectName

Vue DevTools

## 第 4 章 项目基础架构

前端跨域解决方案

问题：

- 跨域是浏览器为了安全而做出的限制策略
- 浏览器请求必须要遵循同源策略;同域名、同端口、同协议

方案：

- CORS 跨域：服务端设置，前端直接调用，后台允许前端某个站点进行访问
- JSONP 前端适配，后台配合，需要前后端同时改造。前端安装 jsonp 插件=>jsonp(url,(err,res)=>{})
- 接口代理：通过修改 Nginx 服务器配置来实现，前端修改，后台不动。vue.config.js=>本地开发环境代理

```js
module.exports={
    devServer:{
        host:
        port:
        proxy:{
            '/api'"{
                targrt:
                changeOrigin:
                pathRewrite:{

                }
            }
        }
    }
}
```

基本插件介绍：

vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie

## 第 5 章 商城首页

## 第 6 章 登录页面

## 第 7 章 Vuex 集成

## 第 8 章 产品站页面

## 第 9 章 商品详情页面

## 第 10 章 购物车页面

## 第 11 章 ElementUI 集成

## 第 12 章 订单确认页面

## 第 13 章 订单结算

## 第 14 章 订单列表

## 第 15 章 上线部署

## 第 16 章 课程总结
