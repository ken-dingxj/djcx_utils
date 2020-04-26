/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-04-22 09:57:51
 * @LastEditTime: 2020-04-25 16:19:03
 * @LastEditors: dingxuejin
 */
import typescript from "rollup-plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {uglify} from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';
import pkg from './package.json';
import merge from 'webpack-merge';

let year = new Date().getFullYear(),version = pkg.version;

let bannerText = `djUtils v${version}
(c) 2020-${year} dxj https://github.com/ken-ding/utils
Licensed under MIT
Released on: Apr 25, 2020`

let config={
  input:"src/index.ts",
  output:{
    name:"dt",
    file:"dist/utils.js",
    format:"umd"
  },
  plugins:[
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
    banner(bannerText)
  ]
}

let [min, esm, cjs,amd,iife,system] = [merge({}, config), merge({}, config), merge({}, config),merge({}, config),merge({}, config),merge({}, config)];

min.output.file="dist/utils.min.js";
min.plugins.unshift(uglify());

esm.output.file="dist/utils.esm.js";
esm.output.format = 'esm';

cjs.output.file="dist/utils.cjs.js";
cjs.output.format = 'cjs';

amd.output.file="dist/utils.amd.js";
amd.output.format = 'amd';

iife.output.file="dist/utils.iife.js";
iife.output.format = 'iife';

system.output.file="dist/utils.system.js";
system.output.format = 'system';

export default [config, min, esm, cjs,amd,iife,system];