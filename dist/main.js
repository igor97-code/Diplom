/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/base.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Store/BaseData.js":
/*!*******************************!*\
  !*** ./src/Store/BaseData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar newdata = [];\nvar image = ['7914', '7915', '7916', '12949', '12950', '12951', '613', '15060', '15061', '15056', '15057'];\nvar brand = ['FXR', 'BCA', '509', 'FXR', 'BCA', '509', 'FXR', 'BCA', '509', 'FXR', 'BCA'];\nvar cat = ['Куртки', 'Ботинки', 'Штаны', 'Куртки', 'Ботинки', 'Штаны', 'Куртки', 'Ботинки', 'Штаны', 'Куртки', 'Ботинки'];\nvar dc = ['odegda', 'optic', 'sumruk', 'shlem'];\n\nfor (var i = 0; i < 30; i++) {\n  var rand = Math.floor(0 + (10 - 1) * Math.random());\n  var rand1 = Math.floor(0 + (10 - 1) * Math.random());\n  var rand2 = Math.floor(0 + (10 - 1) * Math.random());\n  var rand3 = Math.floor(0 + (3 - 1) * Math.random());\n  var randId = Math.floor(0 + (1000 - 1) * Math.random());\n  newdata.push({\n    L: \"1\",\n    action_id: \"0\",\n    actioncolor: \"#00b068\",\n    actiontitle: \"НОВИНКА\",\n    add_object_id: 0,\n    adult: \"1\",\n    age: \"Взрослые\",\n    arrive_date: \"05.11\",\n    arrive_qty: \"1\",\n    articul: \"210021-0510-13\",\n    black: \"1\",\n    brand: brand[rand],\n    cat: cat[rand1],\n    catid: \"43\",\n    child: \"0\",\n    colors: {\n      0: \"Серый\",\n      1: \"Черный\",\n      2: \"Желтый\"\n    },\n    desc: \"<p><br> • HydrX™ – водонепроницаемость 5 000 мм/ паропроницаемость 5 000 г/м<br> • Прочный внешний слой из полиэстера 450 ден с мембраной HydrX™ <br> • Подкладка из сетчатой ткани и флиса<br> • Съемная подкладка с 260 г утеплителя FXR Thermal Flex™ с наполнителем F.A.S.T.™ и перфорацией для вентиляции<br> • Система вентиляции FXR Dry Vent™ с водонепроницаемой поверхностью и защитой от попадания снега на груди и по бокам <br> • Водонепроницаемые молнии YKK® Aquaguard <br> • Регулируемая ветрозащитная юбка<br> • Светоотражающие вставки 360° 3M™ Scotchlite™ <br> • Передняя планка с застежкой на липучке для защиты от холода<br> • Воротник регулируется шнуром<br> • Нижний край регулируется шнуром<br> • Съемный капюшон регулируется шнуром<br> • Удлиненные регулируемые манжеты из лайкры</p>↵\",\n    free_qty: \"0\",\n    gender: \"муж\",\n    grey: \"1\",\n    images: image[rand2],\n    is_new: \"1\",\n    itemcount: 5,\n    male: \"1\",\n    objectX_id: \"48\",\n    object_id: randId,\n    odegda: \"1\",\n    options: {\n      11: \"Куртки\",\n      15: \"CX\",\n      19: \"с утеплителем\",\n      27: \"Серый,Черный,Желтый\",\n      40: \"Grey/Black/Char/Hi Vis\",\n      42: \"Взрослые\",\n      43: \"муж\",\n      1253: \"2021\",\n      1307: \"M Outerwear\"\n    },\n    preorder_id: \"0\",\n    price: \"16&nbsp;492\",\n    price1: \"16492\",\n    price_action: \"0.00\",\n    price_preorder: \"0.00\",\n    price_user: \"21&nbsp;990\",\n    price_user1: \"21990\",\n    ptype: \"2\",\n    check: false,\n    title: \"Ботинки Jethwear Method BOA\",\n    sizes: {\n      0: {\n        arrive_date: \"05.11\",\n        arrive_qty: \"1\",\n        articul: \"210021-0510-13\",\n        free_qty: \"0\",\n        object_id: \"78647\",\n        original_object_id: \"78647\",\n        size: \"L\",\n        subcat: \"Куртки\",\n        subcatid: \"43\",\n        title: \"Куртка FXR CX с утеплителем\",\n        weight_cat: \"9100\",\n        weight_subcat: \"9600\",\n        yellow: \"1\"\n      }\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newdata);\n\n//# sourceURL=webpack:///./src/Store/BaseData.js?");

/***/ }),

/***/ "./src/Store/Reducers/FilterReducer.js":
/*!*********************************************!*\
  !*** ./src/Store/Reducers/FilterReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar filter = [{\n  id: 0,\n  tytle: 'Категории',\n  items: [{\n    key: 'cat',\n    id: 0,\n    tytle: 'Комбинезоны',\n    check: false\n  }, {\n    key: 'cat',\n    id: 1,\n    tytle: 'Куртки',\n    check: false\n  }, {\n    key: 'cat',\n    id: 2,\n    tytle: 'Штаны',\n    check: false\n  }, {\n    key: 'cat',\n    id: 3,\n    tytle: 'Кофты,футболки',\n    check: false\n  }, {\n    key: 'cat',\n    id: 4,\n    tytle: 'Термобелье',\n    check: false\n  }, {\n    key: 'cat',\n    id: 5,\n    tytle: 'Головные уборы',\n    check: false\n  }, {\n    key: 'cat',\n    id: 6,\n    tytle: 'Перчатки',\n    check: false\n  }, {\n    key: 'cat',\n    id: 7,\n    tytle: 'Средства по уходу',\n    check: false\n  }]\n}, {\n  id: 1,\n  tytle: 'Бренды',\n  items: [{\n    key: 'brand',\n    id: 8,\n    tytle: '509',\n    check: false\n  }, {\n    key: 'brand',\n    id: 9,\n    tytle: 'Shark',\n    check: false\n  }, {\n    key: 'brand',\n    id: 10,\n    tytle: 'SpyOptic',\n    check: false\n  }, {\n    key: 'brand',\n    id: 11,\n    tytle: 'Jethwear',\n    check: false\n  }, {\n    key: 'brand',\n    id: 12,\n    tytle: 'BCA',\n    check: false\n  }, {\n    key: 'brand',\n    id: 13,\n    tytle: 'FXR',\n    check: false\n  }, {\n    key: 'brand',\n    id: 14,\n    tytle: 'Abom',\n    check: false\n  }]\n}];\n\nfunction FilterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filter;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var states = state;\n\n  if (action.type == 'checkfilter') {\n    for (var key in states) {\n      for (var i = 0; i < states[key].items.length; i++) {\n        if (states[key].items[i].id == action.id) {\n          if (states[key].items[i].check == false) {\n            states[key].items[i].check = true;\n          } else {\n            states[key].items[i].check = false;\n          }\n        }\n      }\n    }\n  }\n\n  return states;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterReducer);\n\n//# sourceURL=webpack:///./src/Store/Reducers/FilterReducer.js?");

/***/ }),

/***/ "./src/Store/Reducers/basketReducer.js":
/*!*********************************************!*\
  !*** ./src/Store/Reducers/basketReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar basketReducer = function basketReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type == 'addbasket') {\n    state.hasOwnProperty('items') ? state.items.push(action.id) : state.items = [action.id];\n  }\n\n  if (action.type == 'showbasket') {\n    state.open == true ? state.open = false : state.open = true;\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketReducer);\n\n//# sourceURL=webpack:///./src/Store/Reducers/basketReducer.js?");

/***/ }),

/***/ "./src/Store/Reducers/cardReducer.js":
/*!*******************************************!*\
  !*** ./src/Store/Reducers/cardReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseData.js */ \"./src/Store/BaseData.js\");\n\n\nfunction CardReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _BaseData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type == 'openitem') {\n    for (var i = 0; i < state.length; i++) {\n      if (state[i].object_id == action.id) {\n        state[i].check = true;\n      } else {\n        state[i].check = false;\n      }\n    }\n  }\n\n  if (action.type == 'close') {\n    for (var _i = 0; _i < state.length; _i++) {\n      if (state[_i].check == true) {\n        state[_i].check = false;\n      }\n    }\n  }\n\n  return state;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardReducer);\n\n//# sourceURL=webpack:///./src/Store/Reducers/cardReducer.js?");

/***/ }),

/***/ "./src/Store/Reducers/filtrationReducer.js":
/*!*************************************************!*\
  !*** ./src/Store/Reducers/filtrationReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction FiltratingReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var Arfilter = state;\n  console.log(action);\n\n  if (!action.hasOwnProperty('id')) {\n    for (var key in Arfilter) {\n      if (key != 'brand' && key != 'cat') {\n        delete Arfilter[key];\n      }\n    }\n  }\n\n  if (action.type == 'checkfilter') {\n    if (!Arfilter.hasOwnProperty(action.key)) {\n      Arfilter[action.key] = [];\n      Arfilter[action.key].push(action.value);\n    } else {\n      if (Arfilter[action.key].includes(action.value)) {\n        var index = Arfilter[action.key].indexOf(action.value);\n        Arfilter[action.key].splice(index, 1);\n      } else {\n        Arfilter[action.key].push(action.value);\n      }\n    }\n  }\n\n  for (var _key in Arfilter) {\n    if (Object.keys(Arfilter[_key]).length == 0) {\n      delete Arfilter[_key];\n    }\n  }\n\n  return Arfilter;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FiltratingReducer);\n\n//# sourceURL=webpack:///./src/Store/Reducers/filtrationReducer.js?");

/***/ }),

/***/ "./src/Store/Store.js":
/*!****************************!*\
  !*** ./src/Store/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _Reducers_cardReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers/cardReducer */ \"./src/Store/Reducers/cardReducer.js\");\n/* harmony import */ var _Reducers_FilterReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers/FilterReducer */ \"./src/Store/Reducers/FilterReducer.js\");\n/* harmony import */ var _Reducers_filtrationReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducers/filtrationReducer */ \"./src/Store/Reducers/filtrationReducer.js\");\n/* harmony import */ var _Reducers_basketReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reducers/basketReducer */ \"./src/Store/Reducers/basketReducer.js\");\n\n\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  items: _Reducers_cardReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  filter: _Reducers_FilterReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  arfilter: _Reducers_filtrationReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  basket: _Reducers_basketReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/Store/Store.js?");

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header.jsx */ \"./src/components/Header/Header.jsx\");\n/* harmony import */ var _SearchPanel_Panel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPanel/Panel.jsx */ \"./src/components/SearchPanel/Panel.jsx\");\n/* harmony import */ var _Content_Content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content/Content.jsx */ \"./src/components/Content/Content.jsx\");\n\n\n\n\n\nvar App = function App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    basket: props.store.basket,\n    dispatch: props.dispatch,\n    items: props.store.items\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchPanel_Panel_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dispatch: props.dispatch\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content_Content_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    store: props.store,\n    dispatch: props.dispatch\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.jsx?");

/***/ }),

/***/ "./src/components/Content/ContainerItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Content/ContainerItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PanelItems_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelItems.jsx */ \"./src/components/Content/PanelItems.jsx\");\n\n\n\nvar ContainerItem = function ContainerItem(props) {\n  var Arrayitem = props.store.items;\n\n  function ffilter(item) {\n    for (var key in props.store.arfilter) {\n      var xfound = 0;\n\n      for (var i = 0; i < props.store.arfilter[key].length; i++) {\n        if (item[key] == props.store.arfilter[key][i]) {\n          xfound = 1;\n          break;\n        }\n      }\n\n      if (!xfound) return false;\n    }\n\n    return true;\n  }\n\n  if (Object.keys(props.store.arfilter).length != 0) {\n    var items = props.store.items.filter(function (item) {\n      return ffilter(item);\n    });\n    Arrayitem = items;\n  }\n\n  var MinItems = [];\n\n  for (var i = 0; i < 40; i++) {\n    if (typeof Arrayitem[i] != 'undefined') MinItems.push(Arrayitem[i]);\n  }\n\n  if (MinItems.length == 0) {\n    return 'Ничего не найдено';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PanelItems_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    items: MinItems,\n    dispatch: props.dispatch\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerItem);\n\n//# sourceURL=webpack:///./src/components/Content/ContainerItem.jsx?");

/***/ }),

/***/ "./src/components/Content/Content.jsx":
/*!********************************************!*\
  !*** ./src/components/Content/Content.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PanelFilters_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelFilters.jsx */ \"./src/components/Content/PanelFilters.jsx\");\n/* harmony import */ var _ContainerItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContainerItem.jsx */ \"./src/components/Content/ContainerItem.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Content = /*#__PURE__*/function (_React$Component) {\n  _inherits(Content, _React$Component);\n\n  var _super = _createSuper(Content);\n\n  function Content() {\n    _classCallCheck(this, Content);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Content, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"content-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PanelFilters_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        store: this.props.store,\n        dispatch: this.props.dispatch\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContainerItem_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        store: this.props.store,\n        dispatch: this.props.dispatch\n      }))));\n    }\n  }]);\n\n  return Content;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/components/Content/Content.jsx?");

/***/ }),

/***/ "./src/components/Content/PanelFilters.jsx":
/*!*************************************************!*\
  !*** ./src/components/Content/PanelFilters.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Filters = function Filters(props) {\n  var initialfilter = function initialfilter(e) {\n    props.dispatch({\n      type: 'checkfilter',\n      id: e.currentTarget.id,\n      key: e.currentTarget.getAttribute('datakey'),\n      value: e.currentTarget.getAttribute('value')\n    });\n  };\n\n  var section = function section(ar) {\n    var copar = ar.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section\",\n        key: item.id,\n        id: item.id,\n        datakey: item.key,\n        value: item.tytle,\n        onClick: initialfilter\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-checked \".concat(item.check ? 'check' : '')\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-title\"\n      }, item.tytle));\n    });\n    return copar;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Filt-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filt-title\"\n  }, props.store.filter[0].tytle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filt-section\"\n  }, section(props.store.filter[0].items))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Filt-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filt-title\"\n  }, props.store.filter[1].tytle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filt-section\"\n  }, section(props.store.filter[1].items))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filters);\n\n//# sourceURL=webpack:///./src/components/Content/PanelFilters.jsx?");

/***/ }),

/***/ "./src/components/Content/PanelItems.jsx":
/*!***********************************************!*\
  !*** ./src/components/Content/PanelItems.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _item_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.jsx */ \"./src/components/Content/item.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Items = /*#__PURE__*/function (_React$Component) {\n  _inherits(Items, _React$Component);\n\n  var _super = _createSuper(Items);\n\n  function Items() {\n    _classCallCheck(this, Items);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Items, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var itemarray = this.props.items.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          item: item,\n          dispatch: _this.props.dispatch\n        });\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"item-wrapper\"\n      }, itemarray);\n    }\n  }]);\n\n  return Items;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Items);\n\n//# sourceURL=webpack:///./src/components/Content/PanelItems.jsx?");

/***/ }),

/***/ "./src/components/Content/ShowFoollcard.jsx":
/*!**************************************************!*\
  !*** ./src/components/Content/ShowFoollcard.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar FullCard = function FullCard(props) {\n  function spliceImage(image) {\n    var img = image.split(';');\n    return img[0];\n  }\n\n  var getoptions = function getoptions(item) {\n    var stroke = [];\n\n    for (var key in item.options) {\n      var opt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"option\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"option-tytle\"\n      }, optnames[key]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"option-value\"\n      }, item.options[key]));\n      stroke.push(opt);\n    }\n\n    console.log(stroke);\n    return stroke;\n  };\n\n  var addbasket = function addbasket(e) {\n    var itemId = e.currentTarget.getAttribute('dataid');\n    props.dispatch({\n      type: 'addbasket',\n      id: itemId\n    });\n  };\n\n  console.log(props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info-exit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"./img/cross-headers.png.\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"http://b2b.topsports.ru/c/productpage/\".concat(spliceImage(props.item.images), \".jpg\")\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info-added\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tytle\"\n  }, props.item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-info-price\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tytle\"\n  }, \"\\u0426\\u0435\\u043D\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"price\"\n  }, props.item.price1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"option-wrapper\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"basket\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    dataid: props.item.object_id,\n    onClick: addbasket\n  }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullCard);\n\n//# sourceURL=webpack:///./src/components/Content/ShowFoollcard.jsx?");

/***/ }),

/***/ "./src/components/Content/item.jsx":
/*!*****************************************!*\
  !*** ./src/components/Content/item.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShowFoollcard_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowFoollcard.jsx */ \"./src/components/Content/ShowFoollcard.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Item = /*#__PURE__*/function (_React$Component) {\n  _inherits(Item, _React$Component);\n\n  var _super = _createSuper(Item);\n\n  function Item(props) {\n    var _this;\n\n    _classCallCheck(this, Item);\n\n    _this = _super.call(this, props);\n    _this.openinfo = _this.openinfo.bind(_this.props.dispatch);\n    return _this;\n  }\n\n  _createClass(Item, [{\n    key: \"openinfo\",\n    value: function openinfo(e) {\n      this({\n        type: 'openitem',\n        id: e.currentTarget.getAttribute('objectId')\n      });\n    }\n  }, {\n    key: \"replaceImage\",\n    value: function replaceImage(img) {\n      var image = img.split(';');\n      return image[0];\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"item\",\n        objectId: this.props.item.object_id,\n        onClick: this.openinfo\n      }, this.props.item.check && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowFoollcard_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        item: this.props.item,\n        dispatch: this.props.dispatch\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"image\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"http://b2b.topsports.ru/c/productpage/\".concat(this.replaceImage(this.props.item.images), \".jpg\"),\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"item-info\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"title-name\"\n      }, this.props.item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"price\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"price-title\"\n      }, \"\\u0426\\u0435\\u043D\\u0430:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"price-number\"\n      }, this.props.item.price1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"smoll\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/img/nice.png\",\n        alt: \"\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/img/time.png\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"icon-basket\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/img/basket.svg\",\n        alt: \"\"\n      })))));\n    }\n  }]);\n\n  return Item;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\n//# sourceURL=webpack:///./src/components/Content/item.jsx?");

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    _classCallCheck(this, Header);\n\n    _this = _super.call(this, props);\n    _this.openbasket = _this.openbasket.bind(_this.props.dispatch);\n    _this.getBasket = _this.getBasket.bind(_this.props);\n    return _this;\n  }\n\n  _createClass(Header, [{\n    key: \"openbasket\",\n    value: function openbasket() {\n      this({\n        type: 'showbasket'\n      });\n    }\n  }, {\n    key: \"getBasket\",\n    value: function getBasket() {\n      var _this2 = this;\n\n      if (!this.basket.hasOwnProperty('items')) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \" \\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430 \\u043F\\u0443\\u0441\\u0442\\u0430\");\n      var arra = this.basket.items.map(function (item) {\n        for (var i = 0; i < _this2.items.length; i++) {\n          if (_this2.items[i].object_id == item * 1) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              className: \"basket-item\"\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              className: \"basket-item-img\"\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n              src: \"http://b2b.topsports.ru/c/productpage/\".concat(_this2.items[i].images, \".jpg\")\n            })));\n          }\n        }\n      });\n      return arra;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.props);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"../../img/logo.svg\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-navigation\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-navigation-item\"\n      }, \"\\u041A\\u0430\\u0442\\u0430\\u043B\\u043E\\u0433\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-navigation-item\"\n      }, \"\\u0417\\u0430\\u043A\\u0443\\u043F\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-navigation-item\"\n      }, \"\\u041E\\u043F\\u043B\\u0430\\u0442\\u044B\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"login-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"user\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"user-icon\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"../../img/lk.png\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"user-name\"\n      }, \"\\u0418\\u0433\\u043E\\u0440\\u044C \\u0421\\u0442\\u0430\\u0440\\u043E\\u0434\\u0443\\u0431\\u0446\\u0435\\u0432\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"login-basket\",\n        onClick: this.openbasket\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"../../img/basket.svg\"\n      }), this.props.basket.open == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"basket-items\"\n      }, this.getBasket()))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/components/SearchPanel/Panel.jsx":
/*!**********************************************!*\
  !*** ./src/components/SearchPanel/Panel.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Panel = /*#__PURE__*/function (_React$Component) {\n  _inherits(Panel, _React$Component);\n\n  var _super = _createSuper(Panel);\n\n  function Panel(props) {\n    var _this;\n\n    _classCallCheck(this, Panel);\n\n    _this = _super.call(this, props);\n    _this.initialfilter = _this.initialfilter.bind(_this.props.dispatch);\n    return _this;\n  }\n\n  _createClass(Panel, [{\n    key: \"initialfilter\",\n    value: function initialfilter(e) {\n      this({\n        type: 'checkfilter',\n        key: e.currentTarget.getAttribute('datakey'),\n        value: e.currentTarget.getAttribute('value')\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Panel-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\"\n      }, \"\\u042D\\u043A\\u0438\\u043F\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"odegda\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u041E\\u0434\\u0435\\u0436\\u0434\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"obuv\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u041E\\u0431\\u0443\\u0432\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"shlem\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u0428\\u043B\\u0435\\u043C\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"optic\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u041E\\u043F\\u0442\\u0438\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"zashita\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u0417\\u0430\\u0449\\u0438\\u0442\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"snarag\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u0421\\u043D\\u0430\\u0440\\u044F\\u0436\\u0435\\u043D\\u0438\\u0435\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-filter-item\",\n        datakey: \"sumruk\",\n        value: \"1\",\n        onClick: this.initialfilter\n      }, \"\\u0421\\u0443\\u043C\\u043A\\u0438 \\u0438 \\u0440\\u044E\\u043A\\u0437\\u0430\\u043A\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"panel-search\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        placeholder: \"\\u041F\\u043E\\u0438\\u0441\\u043A\"\n      })))));\n    }\n  }]);\n\n  return Panel;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Panel);\n\n//# sourceURL=webpack:///./src/components/SearchPanel/Panel.jsx?");

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/base.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ \"./src/css/base.scss\");\n/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.jsx */ \"./src/components/App.jsx\");\n/* harmony import */ var _Store_Store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store/Store.js */ \"./src/Store/Store.js\");\n\n\n\n\n\n_Store_Store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe(RenderDom);\n\nfunction RenderDom() {\n  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    store: _Store_Store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getState(),\n    dispatch: _Store_Store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dispatch\n  }), document.getElementById(\"root\"));\n}\n\nRenderDom();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });