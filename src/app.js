/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import res from "./resource-es6";
	import haha from "./lib-es6.js";
	// const haha = require('./lib-es6.js');

	const HelloWorldLayer = cc.Layer.extend({
	    sprite: null,
	    ctor: () => {
	        this._super();
	        const size = cc.winSize;
	        const helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
	        helloLabel.x = size.width / 2;
	        helloLabel.y = size.height / 2 + 200;
	        this.addChild(helloLabel, 5);

	        this.sprite = new cc.Sprite(res.HelloWorld_png);
	        this.sprite.attr({
	            x: size.width / 2,
	            y: size.height / 2
	        });
	        this.addChild(this.sprite, 0);
	        return true;
	    }
	});

	const HelloWorldScene = cc.Scene.extend({
	    onEnter: () => {
	        this._super();
	        const layer = new HelloWorldLayer();
	        this.addChild(layer);
	    }
	});



/***/ }
/******/ ]);