/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributescard\": () => (/* binding */ Attributescard),\n/* harmony export */   \"Cards\": () => (/* binding */ Cards)\n/* harmony export */ });\nvar Attributescard;\n(function (Attributescard) {\n    Attributescard[\"fact\"] = \"fact\";\n    Attributescard[\"img\"] = \"img\";\n})(Attributescard || (Attributescard = {}));\nclass Cards extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            fact: null,\n            img: null\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <secction>\r\n            <h1>Cat Fact</h1>\r\n            <img src=\"${this.img}\">\r\n            <p>${this.fact}</p>\r\n            </secction>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-cards\", Cards);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/data/datafetch.ts":
/*!*******************************!*\
  !*** ./src/data/datafetch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getcatsimages\": () => (/* binding */ getcatsimages),\n/* harmony export */   \"getcatsphrase\": () => (/* binding */ getcatsphrase)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getcatsphrase() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const allcatspeak = yield fetch('https://catfact.ninja/fact').then(res => res.json());\n            return allcatspeak;\n        }\n        catch (error) {\n        }\n    });\n}\nfunction getcatsimages() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const allcatsooklike = yield fetch('https://cataas.com/cat/says/').then(res => res.json());\n            return allcatsooklike;\n        }\n        catch (error) {\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data/datafetch.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_datafetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/datafetch */ \"./src/data/datafetch.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card */ \"./src/components/card/card.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const textcat = yield (0,_data_datafetch__WEBPACK_IMPORTED_MODULE_0__.getcatsphrase)();\n            const imgcat = yield (0,_data_datafetch__WEBPACK_IMPORTED_MODULE_0__.getcatsimages)();\n            this.render(textcat, imgcat);\n        });\n    }\n    render(textcat, imgcat) {\n        var _a;\n        const cardcontainer = this.ownerDocument.createElement(\"my-cards\");\n        cardcontainer.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributescard.fact, textcat.fact);\n        cardcontainer.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributescard.img, imgcat);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cardcontainer);\n        const btn = this.ownerDocument.createElement(\"button\");\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;