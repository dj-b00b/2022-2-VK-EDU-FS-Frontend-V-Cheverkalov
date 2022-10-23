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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n//import './index.css';\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar message = document.querySelector('.message');\nvar chat = document.querySelector('.chat');\ngetMessagesFromLocalStorage();\nform.addEventListener('submit', this.handleSubmit.bind(this));\nform.addEventListener('keypress', this.handleKeyPress.bind(this));\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var message = {\n    'time': new Date().toLocaleTimeString().slice(0, -3),\n    'sender': 'not defined',\n    'content': input.value\n  };\n  addMessagesMirror(message);\n  saveMessagesInLocalStorage(message);\n  event.target.reset();\n}\nfunction addMessagesMirror(message) {\n  createMessage(message, 'message message-right');\n  createMessage(message, 'message message-left');\n}\nfunction createMessage(message, sender) {\n  var newMessage = document.createElement('div');\n  newMessage.className = sender;\n  chat.append(newMessage);\n  var newMessageContent = document.createElement('p');\n  newMessageContent.className = 'message_text';\n  newMessageContent.innerText = message.content;\n  newMessage.append(newMessageContent);\n  var newMessageMetadata = document.createElement('div');\n  newMessageMetadata.className = 'message_metadata';\n  newMessage.append(newMessageMetadata);\n  var newMessageTime = document.createElement('div');\n  newMessageTime.className = 'sending_time';\n  newMessageTime.innerText = message.time;\n  newMessageMetadata.append(newMessageTime);\n  var newMessageStatus = document.createElement('div');\n  newMessageStatus.className = 'status';\n  newMessageMetadata.append(newMessageStatus);\n  newMessageStatus.innerHTML = \"<span class='material-icons'>done_all</span>\";\n}\nfunction saveMessagesInLocalStorage(message) {\n  var messages = localStorage.getItem('messages');\n  if (messages == '' || messages == null) {\n    localStorage.setItem('messages', JSON.stringify({\n      'all': []\n    }));\n  }\n  messages = localStorage.getItem('messages');\n  messages = JSON.parse(messages);\n  messages.all.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction getMessagesFromLocalStorage() {\n  var messages = localStorage.getItem('messages');\n  if (messages != '' && messages !== null) {\n    messages = JSON.parse(messages);\n    var _iterator = _createForOfIteratorHelper(messages.all),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _message = _step.value;\n        addMessagesMirror(_message);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });