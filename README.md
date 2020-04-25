## 构建方式
- amd – 异步模块定义，用于像RequireJS这样的模块加载器
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 &lt;script type=module&gt;标签引入
- iife – 一个自动执行的功能，适合作为&lt;script&gt;标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- umd – 通用模块定义，以amd，cjs 和 iife 为一体
- system - SystemJS 加载器格式

## 安装
### cdn
对于制作原型或学习，你可以这样使用最新版本：
```html
<script src="https://cdn.jsdelivr.net/npm/d_animate/dist/Animate.umd.js"></script>
```

使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：
```html
<script type="module">
  import Vue from "https://cdn.jsdelivr.net/npm/d_animate/dist/Animate.esm.js""
</script>
```

 webpack 或 Browserify 模块打包器配合使用
 ```js
    npm install d_animate
 ```
