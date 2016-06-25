/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _core = __webpack_require__(1);
	
	var _creater = __webpack_require__(2);
	
	var outerStyle = {
	  backgroundColor: 'green',
	  width: '100%',
	  height: '600px'
	};
	var innerStyle = {
	  backgroundColor: 'yellow',
	  width: '100%',
	  height: '500px'
	};
	var h1Style = {
	  fontSize: '40px',
	  textAlign: 'center',
	  color: 'white'
	};
	
	var root = document.getElementById('root');
	var h1 = _creater.factory.createElement('h1', { style: h1Style, value: 'Hello world' });
	var inner = _creater.factory.createElement('div', { style: innerStyle }, h1);
	var outer = _creater.factory.createElement('div', { style: outerStyle, onclick: function onclick() {
	    console.log('hello world');
	  } }, inner);
	
	root.appendChild(outer);
	// bootstrap(outer, root)

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var bootstrap = function bootstrap(tree, root) {
	  var fragment = document.createDocumentFragment();
	  parser(tree, fragment);
	  root.appendChild(fragment);
	};
	
	var parser = function parser(tree, dest) {
	  if (tree.length == 0) {
	    return;
	  }
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = tree[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var node = _step.value;
	
	      var element = nodeFactory(node);
	      dest.appendChild(element);
	      if (node.child) {
	        parser(node.child, element);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};
	
	exports.bootstrap = bootstrap;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// import {virtualDom} from './virtual-dom.js';
	
	var factory = {
	  createElement: createElement
	};
	
	function createElement(selector, props) {
	  var element = document.createElement(selector);
	  propsPipe.call(element, props);
	
	  for (var _len = arguments.length, innerElems = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    innerElems[_key - 2] = arguments[_key];
	  }
	
	  appendPipe.call(element, innerElems);
	  return element;
	}
	
	var propsPipe = function propsPipe(props) {
	  stylePipe.call(this, props);
	  handlerPipe.call(this, props);
	  valuePipe.call(this, props);
	};
	
	var stylePipe = function stylePipe(props) {
	  for (var prop in props.style) {
	    this.style[prop] = props.style[prop];
	  }
	};
	
	var handlerPipe = function handlerPipe(props) {
	  var handlers = ['onclick'];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var handler = _step.value;
	
	      if (props[handler]) {
	        this[handler] = props[handler];
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};
	
	var valuePipe = function valuePipe(props) {
	  this.textContent = props.value;
	};
	
	var appendPipe = function appendPipe(innerElems) {
	  if (innerElems) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      for (var _iterator2 = innerElems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var item = _step2.value;
	
	        this.appendChild(item);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  }
	};
	
	exports.factory = factory;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map