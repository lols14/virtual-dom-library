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
	
	var _virtualDom = __webpack_require__(1);
	
	var _core = __webpack_require__(3);
	
	var root = document.getElementById('root');
	
	(0, _core.bootstrap)(_virtualDom.virtualDom, root);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var virtualDom = [{
	    selector: 'div',
	    value: '1level div',
	    onclick: function onclick(e) {
	        console.log(e);
	    },
	    style: {
	        backgroundColor: 'green',
	        width: '100%',
	        height: '200px',
	        color: 'white'
	    },
	    child: [{
	        selector: 'h1',
	        value: 'Hello h1'
	    }, {
	        selector: 'h2',
	        value: 'Hello h2'
	    }, {
	        selector: 'h3',
	        value: 'Hello h3'
	    }]
	}, {
	    selector: 'div',
	    value: '1 level div',
	    style: {
	        width: '100%',
	        height: '300px',
	        backgroundColor: 'red'
	    }
	}];
	
	exports.virtualDom = virtualDom;

/***/ },
/* 2 */,
/* 3 */
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
	
	var nodeFactory = function nodeFactory(node) {
	  var element = document.createElement(node.selector);
	  element.textContent = node.value;
	  element.onclick = node.onclick;
	  styleFactory.call(element, node.style);
	  return element;
	};
	
	var styleFactory = function styleFactory(style) {
	  for (var prop in style) {
	    this.style[prop] = style[prop];
	  }
	};
	
	exports.bootstrap = bootstrap;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map