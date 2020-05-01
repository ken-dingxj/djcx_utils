# djcx_utils(常用工具库) [![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://badgen.net/npm/v/djcx_utils
[npm-url]: https://npmjs.com/package/djcx_utils
[downloads-image]: https://badgen.net/npm/dt/djcx_utils
[downloads-url]: https://npmjs.org/package/djcx_utils

## 使用方式
注：为简化操作，默认命名为"dt"

### ES6
```js
import dt from 'djcx_utils'
dt.trim('test')
```
### CommonJS
```js
var tks = require('djcx_utils');
dt.trim('test')
```
### AMD
```js
require(['djcx_utils'],function(dt){
 dt.trim('test')
})
```
### 直接引入
```js
<script src="https://cdn.jsdelivr.net/npm/djcx_utils/dist/djcx_utils.min.js"></script>
    dt.trim('test')
```
## 方法说明
方法名|用途|描述
---|:-:|---
trim|字符串去空格|@param str {String} 需要处理的字符串<br>@param type {Boolean} 是否去除所有空格
uuid|随机生成uuid|@param -