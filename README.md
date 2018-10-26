# @yoshimoora/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@yoshimoora/tiny.svg)](https://www.npmjs.com/package/@yoshimoora/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@yoshimoora/tiny.svg)](https://www.npmjs.com/package/@yoshimoora/tiny)

Removes all spaces from a string.

## Install

```
$ npm install @yoshimoora/tiny
```

## Usage

```js
import tiny from "@yoshimoora/tiny";

tiny("Test test test");
//=> "Testtesttest"

tiny(123);
//=> Uncaught TypeError: is not string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
