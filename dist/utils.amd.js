/**
 * djUtils v1.0.1
 * (c) 2020-2020 dxj https://github.com/ken-ding/utils
 * Licensed under MIT
 * Released on: Apr 25, 2020
 */

define(function () { 'use strict';

  var dt = /** @class */ (function () {
      function dt() {
      }
      /**
       * trim 字符串去除空格
       * @param str {String} 需要处理的字符串
       * @param type {Boolean} 是否去除所有空格
       */
      dt.prototype.trim = function (str, type) {
          return type ? str.replace(/\s+/g, "") : str.replace(/^\s+|\s+$/g, "");
      };
      /**
       * uuid 随机生成uuid
       */
      dt.prototype.uuid = function () {
          var s = [];
          var hexDigits = "0123456789abcdef";
          for (var i = 0; i < 36; i++) {
              s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }
          s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
          s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
          s[8] = s[13] = s[18] = s[23] = "-";
          var uuid = s.join("");
          return uuid;
      };
      return dt;
  }());
  var index = new dt();

  return index;

});
