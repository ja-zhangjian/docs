# React商品管理系统

## 搭建项目 

npm install -g create-react-app : 全局下载工具

create-react-app react-admin : 下载模板项目

cd react-admin

npm start

访问: localhost:3000

初始项目的目录结构

``` doc
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

minireset.css，为啥我github找的不顶用？我的问题？

yarn add react-router-dom

yarn add antd

yarn add react-app-rewired customize-cra babel-plugin-import

config-overrides.js

yarn add less less-loader 运行失败，less-loader降级到5.0.0, 卸载的时候，yarn安的yarn卸载。

底图样式

因为antd版本更新了，这个antd的样式参考api部分有变化。

表单的自定义的过滤器改了，然后callback取消了，自定义的条件顺序要注意，比如那个判断非空放前面。字母、数字、下划线的判断也要放前面。并且返回的是一个promise，比如：return Promise.reject('密码不能空!')

form的表单提交的回调onsubmit被拆分了，拆分为onFinish和onFinishFailed，这个是antd的3. X和4. X的区别。

我现在遇到的是3. X的表单不用再包裹From.create()(组件), 这个是方便了使用，但是之前3. X使用的是高阶函数，高阶组件。就是传参是一个函数，或者返回值为一个函数，我不确定是否为函数的柯里化。

axios默认传参是json形式的，需要转化成urlcode形式，需要querystring转换
