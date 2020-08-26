### Webpack自学笔记
webpack是js应用的静态模块打包工具
模块+打包
前端模块化：AMD、CMD、CommonJS、ES6
依赖于node
PS:不说这个开发时依赖的，是真的坑人，乐色。
```sh
npm i webpack --save-dev 
```
终端执行的webpack都是全局的

script里面的脚本，优先用本地的(npm run build)

webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```