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

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n// Takes in our sprite class\n\n\n\n// creates Sprite's child class, Ball\nclass Ball extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // Ball's Params\n  constructor(x, y, dx = 2, dy = -1, radius = 10, color) {\n    // Sprite's params\n    super(x, y, radius * 2, radius * 2, color);\n    this.dx = dx;\n    this.dy = dy;\n    this.radius = radius;\n    this.PI2 = Math.PI * 2;\n  }\n\n  // moves our ball, using sprite moveBy\n  move() {\n    this.moveBy(this.dx, this.dy);\n  }\n\n  // overrides the method in Sprite Class\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, this.PI2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  // resets Ball's position\n  reset(canvas) {\n    this.x = canvas.width / 2;\n    this.y = canvas.height - 30;\n    this.dx = 3;\n    this.dy = -3;\n  }\n}\n\n// exports our Ball class\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n// imports Sprite class\n\n\n// creats Sprites child class, Brick ** no 's' ! **\nclass Brick extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // Brick's params\n  constructor(x, y, width, hieght, color) {\n    // Sprite's params\n    super(x, y, width, hieght, color);\n    this.status = 1;\n  }\n}\n\n// exports our Brick class\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n\n\n//# sourceURL=webpack:///./src/brick.js?");

/***/ }),

/***/ "./src/bricks.js":
/*!***********************!*\
  !*** ./src/bricks.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n// import our Brick class\n\n\n// creates our Bricks class ***remember the 's'***\nclass Bricks {\n  constructor(cols, rows, width, height, padding, OffsetTop, OffsetLeft, color) {\n    this.cols = cols;\n    this.rows = rows;\n    this.bricks = [];\n    this.width = width;\n    this.height = height;\n    this.padding = padding;\n    this.OffsetLeft = OffsetLeft;\n    this.OffsetTop = OffsetTop;\n    this.color = color;\n\n    this.init();\n  }\n\n  // orients our new bricks in their respective positions\n  init() {\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brickX = (c * (this.width + this.padding)) + this.OffsetLeft;\n        const brickY = (r * (this.height + this.padding)) + this.OffsetTop;\n        if (c % 2 === 0) {\n          this.bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width + (c * 2.5),\n            this.height + (r * 2.5), this.color);\n        } else if (r % 2 === 0) {\n          this.bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height, \"pink\");\n        } else {\n          this.bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height, \"yellow\");\n        }\n      }\n    }\n  }\n\n  // draws our bricks\n  render(ctx) {\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = this.bricks[c][r];\n        if (brick.status === 1) {\n          brick.render(ctx);\n        }\n      }\n    }\n  }\n}\n\n// exports Bricks class \n/* harmony default export */ __webpack_exports__[\"default\"] = (Bricks);\n\n\n//# sourceURL=webpack:///./src/bricks.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: canvas, ctx, ballRadius, paddleHeight, paddleWidth, paddleXStart, paddleYStart, brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, colour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballRadius\", function() { return ballRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleHeight\", function() { return paddleHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleWidth\", function() { return paddleWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleXStart\", function() { return paddleXStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleYStart\", function() { return paddleYStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickRowCount\", function() { return brickRowCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickColumnCount\", function() { return brickColumnCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickWidth\", function() { return brickWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickHeight\", function() { return brickHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickPadding\", function() { return brickPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickOffsetTop\", function() { return brickOffsetTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickOffsetLeft\", function() { return brickOffsetLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colour\", function() { return colour; });\n// All of our Constants\n\n// canvas\nconst canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n// ball\nconst ballRadius = 10;\n// paddle\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nconst paddleXStart = (canvas.width - paddleWidth) / 2;\nconst paddleYStart = canvas.height - paddleHeight;\n// brick\nconst brickRowCount = 5;\nconst brickColumnCount = 7;\nconst brickWidth = 75;\nconst brickHeight = 20;\nconst brickPadding = 10;\nconst brickOffsetTop = 30;\nconst brickOffsetLeft = 30;\n// colour\nconst colour = \"#0095DD\";\n\n// exports our code to other files\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n/* harmony import */ var _bricks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bricks */ \"./src/bricks.js\");\n/* harmony import */ var _lables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lables */ \"./src/lables.js\");\n// imports all our modules into one main file\n\n\n\n\n\n\n\n// creates our main opperations class, Game (which is kinda like glue)\nclass Game {\n  constructor() {\n    // Ball class\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0, 2, -2, _constants__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"]);\n\n    // Paddle Class\n    this.paddle = new _sprite__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleXStart\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleYStart\"],\n      _constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleWidth\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleHeight\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"]);\n\n    // Bricks Class\n    this.brick = new _brick__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"brickColumnCount\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickRowCount\"],\n      _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickWidth\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickHeight\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"]);\n    this.bricks = new _bricks__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"brickColumnCount\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickRowCount\"],\n      _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickWidth\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickHeight\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickPadding\"],\n      _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickOffsetLeft\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"brickOffsetTop\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"]);\n\n    // Lables Class\n    this.score = new _lables__WEBPACK_IMPORTED_MODULE_5__[\"default\"](8, 20, _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"], \"Score: \");\n    this.lives = new _lables__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - 65, 20, _constants__WEBPACK_IMPORTED_MODULE_0__[\"colour\"], \"Lives: \");\n\n    // Setup\n    this.leftPressed = false;\n    this.rightPressed = false;\n    this.setup();\n  }\n\n  setup() {\n    this.lives.value = 3;\n    this.resetBallAndPaddle();\n    document.addEventListener(\"keydown\", ((e) => {\n      this.keyDownHandler(e);\n    }), false);\n    document.addEventListener(\"keyup\", ((e) => {\n      this.keyUpHandler(e);\n    }), false);\n    document.addEventListener(\"mousemove\", ((e) => {\n      this.mouseMoveHandler(e);\n    }), false);\n  }\n\n  // resets our ball and Paddle\n  resetBallAndPaddle() {\n    this.ball.reset(_constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"]);\n    this.paddle.reset(_constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleXStart\"]);\n  }\n\n  // creates win conditions and tests collisions with bricks\n  collisionDetection() {\n    for (let c = 0; c < this.bricks.cols; c += 1) {\n      for (let r = 0; r < this.bricks.rows; r += 1) {\n        const brick = this.bricks.bricks[c][r];\n        if (brick.status === 1) {\n          if (this.ball.x > brick.x\n            && this.ball.x < brick.x + brick.width\n            && this.ball.y > brick.y\n            && this.ball.y < brick.y + brick.height) {\n            this.ball.dy = -this.ball.dy;\n            brick.status = 0;\n            this.score.value += 1;\n            if (this.score.value === this.bricks.cols * this.bricks.rows) {\n              alert(\"YOU WIN, CONGRATS!\");\n              document.location.reload();\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // controls the movement of our paddle\n  movePaddle() {\n    if (this.rightPressed && this.x < _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - this.width) {\n      this.paddle.moveBy(7, 0);\n    } else if (this.leftPressed && this.x > 0) {\n      this.paddle.moveBy(-7, 0);\n    }\n  }\n\n  // creates lose conditions and tests collisions with canvas/paddle\n  collisionWithCanvasAndPaddle() {\n    if (this.ball.x + this.ball.dx > _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - this.ball.radius\n      || this.ball.x + this.ball.dx < this.ball.radius) {\n      this.ball.dx = -this.ball.dx;\n    }\n    if (this.ball.y + this.ball.dy < this.ball.radius) {\n      this.ball.dy = -this.ball.dy;\n    } else if (this.ball.y + this.ball.dy > _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height - this.ball.radius) {\n      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {\n        this.ball.dy = -this.ball.dy;\n      } else {\n        this.lives.value -= 1;\n        if (this.lives.value < 1) {\n          alert(\"GAME OVER\");\n          this.lives = 3;\n          document.location.reload();\n        } else {\n          this.resetBallAndPaddle();\n        }\n      }\n    }\n  }\n\n  // tests if the keys are held down/pressed\n  keyDownHandler(e) {\n    if (e.key === 39) {\n      this.rightPressed = true;\n    } else if (e.key === 37) {\n      this.leftPressed = true;\n    }\n  }\n\n  // tests if the keys are up/not pressed\n  keyUpHandler(e) {\n    if (e.key === 39) {\n      this.rightPressed = false;\n    } else if (e.key === 37) {\n      this.leftPressed = false;\n    }\n  }\n\n  // controls our paddle using the mouse\n  mouseMoveHandler(e) {\n    const relativeX = e.clientX - _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].offsetLeft;\n    if (relativeX > 0 && relativeX < _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width) {\n      this.paddle.moveTo(relativeX - this.paddle.width / 2, _constants__WEBPACK_IMPORTED_MODULE_0__[\"paddleYStart\"]);\n    }\n  }\n\n  // displays our game and runs necessary functions\n  draw() {\n    // creates our canvas and colors it's background\n    _constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].rect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _constants__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n    _constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"lightgreen\";\n    _constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n    // creates our assests\n    this.bricks.render(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\n    this.ball.render(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\n    this.paddle.render(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\n    this.score.render(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\n    this.lives.render(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\n    // runs our functions for gameplay\n    this.collisionDetection();\n    this.ball.move();\n    this.movePaddle();\n    this.collisionWithCanvasAndPaddle();\n    // requestAnimationFrame(this.draw.bind(this));\n    // Google: JavaScript This is confusing\n    requestAnimationFrame(() => {\n      this.draw();\n    });\n  }\n}\n\n// sends our game to index.js\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// imports Game class\n\n\n// creates new game\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n// runs our program! (or at least it used to)\ngame.draw();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lables.js":
/*!***********************!*\
  !*** ./src/lables.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n// imports Spite class\n\n\n// creates Sprite's child class, Lable\nclass Lables extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // Lable's params\n  constructor(x, y, color, txt, font = \"16px Arial\") {\n    // Sprite's params\n    super(x, y, 0, 0, color);\n    this.txt = txt;\n    this.font = font;\n    this.value = 0;\n  }\n\n  // overrides Sprites render method\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`${this.txt} ${this.value}`, this.x, this.y);\n  }\n}\n\n// exports Lables class\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lables);\n\n\n//# sourceURL=webpack:///./src/lables.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n// Imports const colours\n\n\n// creates parent class, Sprite\nclass Sprite {\n  constructor(x = 0, y = 0, width = 10, height = 10, color = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  // creates our games items\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  // resets paddle's position\n  reset(paddleXStart) {\n    this.x = paddleXStart;\n  }\n\n  // controles object movement\n  moveBy(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n\n  // used for mouse controls\n  moveTo(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n// exports Sprite class\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });