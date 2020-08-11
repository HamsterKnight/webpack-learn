/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event.js */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/appendNum.js":
/*!*******************************!*\
  !*** ./src/page/appendNum.js ***!
  \*******************************/
/*! exports provided: createNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNum\", function() { return createNum; });\n/* harmony import */ var _util_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/randomColor */ \"./src/util/randomColor.js\");\n\r\nvar container = document.getElementById('divContainer')\r\nvar divCenter = document.getElementById('divCenter')\r\n\r\nfunction createNum(n, color, isPrime) {\r\n  var span = document.createElement('span')\r\n  span.innerText = n\r\n  if(isPrime(n)) {\r\n    span.style.color = color\r\n    createCenterNum(n, color, isPrime)\r\n  }\r\n  container.appendChild(span)\r\n  createCenterNumber(n)\r\n}\r\n// 产生中间的数字\r\nfunction createCenterNumber(n) {\r\n  divCenter.innerText = n\r\n}\r\n\r\nfunction createCenterNum(n, color) {\r\n  var div = document.createElement('div')\r\n  div.classList.add('center')\r\n  div.innerText = n\r\n  document.body.appendChild(div)\r\n  getComputedStyle(div).left; //只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow\r\n  div.style.color = color\r\n  div.style.transform = `translate(${Object(_util_randomColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-150, 150)}px, ${Object(_util_randomColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-150, 150)}px)`\r\n  div.style.opacity = 0\r\n  \r\n}\r\n\n\n//# sourceURL=webpack:///./src/page/appendNum.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n/* harmony import */ var _appendNum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNum */ \"./src/page/appendNum.js\");\n\r\n\r\nvar isStart = true\r\nvar num = new _util_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nnum.cb = _appendNum__WEBPACK_IMPORTED_MODULE_1__[\"createNum\"]\r\nnum.start()\r\nwindow.onclick = function () {\r\n  if(isStart) {\r\n    num.stop()\r\n    isStart = false\r\n  } else {\r\n    \r\n    num.start()\r\n    isStart = true\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isPrime; });\n/**\r\n * 判断n是否是素数\r\n * 素数：仅能被1和自身整除\r\n * @param {*} n \r\n */\r\nfunction isPrime (n) {\r\n  // 1 不是素数\r\n  if(n < 2) {\r\n    return false\r\n  }\r\n  for(var i = 2; i <= n - 1; i++) {\r\n    if (n % i === 0) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\n\n//# sourceURL=webpack:///./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Num; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n/* harmony import */ var _randomColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomColor */ \"./src/util/randomColor.js\");\n\r\n\r\n// 产生一个num 对象\r\nclass Num {\r\n  constructor(duration = 200) {\r\n    this.num = 1\r\n    this.duration = duration\r\n    this.timer = null\r\n    this.cb = null\r\n  }\r\n  start() {\r\n    if(this.timer) {\r\n      return\r\n    }\r\n    this.timer = setInterval(() => {\r\n      this.cb && this.cb(this.num, Object(_randomColor__WEBPACK_IMPORTED_MODULE_1__[\"randomColor\"])(), _isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n      this.num++\r\n    }, this.duration);\r\n  }\r\n  stop() {\r\n    clearInterval(this.timer)\r\n    this.timer = null\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/util/number.js?");

/***/ }),

/***/ "./src/util/randomColor.js":
/*!*********************************!*\
  !*** ./src/util/randomColor.js ***!
  \*********************************/
/*! exports provided: getRandom, randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\n// 获取随机颜色\r\nvar colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\nfunction getRandom(min, max) {\r\n  return Math.floor(Math.random() * (max - min) + min ) \r\n}\r\nfunction randomColor() {\r\n  var index = getRandom(0, colors.length - 1)\r\n  return colors[index]\r\n}\r\n\n\n//# sourceURL=webpack:///./src/util/randomColor.js?");

/***/ })

/******/ });