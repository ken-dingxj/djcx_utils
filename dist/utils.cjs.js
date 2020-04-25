/**
 * djUtils v1.0.1
 * (c) 2020-2020 dxj https://github.com/ken-ding/utils
 * Licensed under MIT
 * Released on: oct 21, 2020
 */

'use strict';

var dt = /** @class */ (function () {
    function dt() {
    }
    /**
     * trim 字符串去除空格
     * @param str {String} 需要处理的字符串
     * @param type {Boolean} 是否去除所有空格
     */
    dt.prototype.trim = function (str, type) {
        return type ? str.replace(/\s+/g, '') : str.replace(/^\s+|\s+$/g, '');
    };
    return dt;
}());

module.exports = dt;
