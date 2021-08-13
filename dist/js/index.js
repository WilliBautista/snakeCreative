/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addRemoveClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addRemoveClass */ "./src/js/modules/addRemoveClass.js");
/* harmony import */ var _modules_fillGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fillGallery */ "./src/js/modules/fillGallery.js");
/* harmony import */ var _modules_scrollSmoth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSmoth */ "./src/js/modules/scrollSmoth.js");
/* harmony import */ var _modules_scrollWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollWidth */ "./src/js/modules/scrollWidth.js");
/* harmony import */ var _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/stickyHeader */ "./src/js/modules/stickyHeader.js");
/* harmony import */ var _utilities_clases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/clases */ "./src/js/utilities/clases.js");







(function () {
  var burguerMenu = document.querySelector("#main-menu-burguer");
  var searchForm = document.querySelector("#main-search");
  var ourWorkButton = document.querySelector("#btn-our-work");
  var menuCategories = document.querySelectorAll(".main-menu a");
  var gallery = document.querySelector(".gallery-container");
  var showMoreButton = document.querySelector("#show-me-more");
  var scrollToTopButton = document.querySelector(".scroll-to-top"); // Remove class on click outside

  if (!!burguerMenu || !!searchForm) (0,_modules_addRemoveClass__WEBPACK_IMPORTED_MODULE_0__.removeClassOnClickOutside)(_utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class1); // Burguer menu action

  if (!!burguerMenu) {
    var mainMenuContent = document.querySelector(".header__rigth");
    (0,_modules_addRemoveClass__WEBPACK_IMPORTED_MODULE_0__.addRemoveClass)(burguerMenu, mainMenuContent, _utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class1);
  } // Search form action


  if (!!searchForm) {
    var searchButton = searchForm.querySelector(".form__submit");
    var searchInput = searchForm.querySelector(".form__text");
    (0,_modules_addRemoveClass__WEBPACK_IMPORTED_MODULE_0__.addRemoveClass)(searchButton, searchForm, _utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class1, function () {
      searchInput.focus();
    });
    searchForm.addEventListener("submit", function (e) {
      var value = searchInput.value;
      e.preventDefault();

      if (value !== '' && !searchForm.classList.contains(_utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class1)) {
        (0,_modules_fillGallery__WEBPACK_IMPORTED_MODULE_1__.default)(value, false);
        (0,_modules_scrollSmoth__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)(gallery);
        showMoreButton.setAttribute("data-ccategory", value);
      }
    });
  } // Show projects


  if (!!ourWorkButton) (0,_modules_scrollSmoth__WEBPACK_IMPORTED_MODULE_2__.actionToSmooth)(ourWorkButton, gallery); // Show more button

  if (!!showMoreButton) {
    showMoreButton.addEventListener('click', function (_ref) {
      var target = _ref.target;
      var ccategory = target.dataset.ccategory;
      (0,_modules_fillGallery__WEBPACK_IMPORTED_MODULE_1__.default)(ccategory, true);
    });
  } // Scroll to top button


  if (!!scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function () {
      (0,_modules_scrollSmoth__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)(gallery);
    });
  } // Main menu actions


  if (menuCategories.length) {
    var _mainMenuContent = document.querySelector(".header__rigth");

    menuCategories.forEach(function (el) {
      (0,_modules_addRemoveClass__WEBPACK_IMPORTED_MODULE_0__.addRemoveClass)(el, el.parentElement, _utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class2, function () {
        var category = el.dataset.category;
        var anotherMenu = el.closest(".main-menu--filters") ? document.querySelector(".main-menu--header") : document.querySelector(".main-menu--filters");
        showMoreButton.setAttribute("data-ccategory", category);
        anotherMenu.querySelector("[data-category='".concat(category, "']")).parentElement.classList.add(_utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class2);
      });
      (0,_modules_scrollSmoth__WEBPACK_IMPORTED_MODULE_2__.actionToSmooth)(el, gallery, function () {
        var category = el.dataset.category;

        _mainMenuContent.classList.remove(_utilities_clases__WEBPACK_IMPORTED_MODULE_5__.default.class1);

        (0,_modules_fillGallery__WEBPACK_IMPORTED_MODULE_1__.default)(category);
      });
    });
  } // Preload gallery


  document.addEventListener("DOMContentLoaded", function () {
    return (0,_modules_fillGallery__WEBPACK_IMPORTED_MODULE_1__.default)('all');
  }); // Create css variable on resize screen

  window.addEventListener("resize", function () {
    return (0,_modules_scrollWidth__WEBPACK_IMPORTED_MODULE_3__.default)();
  });
  window.dispatchEvent(new Event("resize")); // Scroll to top animation

  window.addEventListener("scroll", function (e) {
    if (!!scrollToTopButton) {
      if (document.documentElement.scrollTop > gallery.offsetTop) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    } // Sticky header
    // stickyHeader(header);

  });
  window.dispatchEvent(new Event("scroll"));
})();

/***/ }),

/***/ "./src/js/modules/addRemoveClass.js":
/*!******************************************!*\
  !*** ./src/js/modules/addRemoveClass.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRemoveClass": () => (/* binding */ addRemoveClass),
/* harmony export */   "removeClassOnClickOutside": () => (/* binding */ removeClassOnClickOutside)
/* harmony export */ });
/**
 * Remove clsss of the current element active on click outside.
 * @param {String} cls class to find and remove
 */
var removeClassOnClickOutside = function removeClassOnClickOutside(cls) {
  document.addEventListener('click', function (_ref) {
    var target = _ref.target;
    var currentOpen = document.querySelector(".".concat(cls));
    if (!target.closest(".".concat(cls)) && !!currentOpen) currentOpen.classList.remove(cls);
  });
};
/**
 * Add and remove clases for elements
 * @param {HTMLElement} actionable Element to click and execute the action
 * @param {HTMLElement} objetive Node to affect with the actionable element
 * @param {String} cls Class to add at objetive element
 */


var addRemoveClass = function addRemoveClass(actionable, objetive, cls) {
  var callbackAdd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var callbackRemove = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  actionable.addEventListener('click', function (event) {
    if (actionable.tagName === 'A') event.preventDefault();
    var currentElementsWithClass = document.querySelectorAll(".".concat(cls));

    if (currentElementsWithClass.length) {
      currentElementsWithClass.forEach(function (el) {
        if (el != objetive) el.classList.remove(cls);
      });
    }

    objetive.classList.toggle(cls);

    if (objetive.classList.contains(cls)) {
      if (typeof callbackAdd === 'function') callbackAdd(objetive);
    } else {
      if (typeof callbackRemove === "function") callbackRemove(objetive);
    }
  });
};



/***/ }),

/***/ "./src/js/modules/fillGallery.js":
/*!***************************************!*\
  !*** ./src/js/modules/fillGallery.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_unplashService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/unplashService */ "./src/js/services/unplashService.js");
/* harmony import */ var _templates_galleryTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/galleryTemplate */ "./src/js/templates/galleryTemplate.jsx");


var page = 1;
/**
 * Fill the gallery with all results
 * @param {String} category query to search
 * @param {Boolean} isPager Have pager
 */

var fillGallery = function fillGallery(category) {
  var isPager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var galleryContent = document.querySelector("#gallery");
  var galleryLoader = document.querySelector(".loading");
  category = category === "all" ? false : category;
  galleryLoader.style.display = "flex";
  if (isPager) page += 1;else page = 1;
  (0,_services_unplashService__WEBPACK_IMPORTED_MODULE_0__.default)(category, page).then(function (resp) {
    var items = (0,_templates_galleryTemplate__WEBPACK_IMPORTED_MODULE_1__.default)(resp, category);

    if (items.length) {
      if (!isPager) galleryContent.innerHTML = "";
      items.forEach(function (el) {
        return galleryContent.insertAdjacentElement("beforeend", el);
      });
    }

    galleryLoader.style.display = "none";
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillGallery);

/***/ }),

/***/ "./src/js/modules/scrollSmoth.js":
/*!***************************************!*\
  !*** ./src/js/modules/scrollSmoth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScroll": () => (/* binding */ smoothScroll),
/* harmony export */   "actionToSmooth": () => (/* binding */ actionToSmooth)
/* harmony export */ });
/**
 * Smoth scroll to an element without action
 * @param {HTMLElement} objetive Element on stop the scroll
 * @param {Function} callbackFinish Callback to execute where finished the scroll
 * @param {Int} sepation Space to separe of top
 */
var smoothScroll = function smoothScroll(objetive) {
  var callbackStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var callbackFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var sepation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var offset = objetive.offsetTop - sepation;
  if (typeof callbackStart === "function") callbackStart();
  window.scrollTo({
    top: offset,
    left: 0,
    behavior: "smooth"
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY === offset && typeof callbackFinish === "function") {
      callbackFinish();
    }
  });
};
/**
 * Action element to smooth scroll to another element
 * @param {HTMLElement} actionable Element to execute the event
 * @param {HTMLElement} objetive Element on stop the scroll
 * @param {Function} callbackFinish Callback to execute where finished the scroll
 * @param {Int} sepation Space to separe of top
 */


var actionToSmooth = function actionToSmooth(actionable, objetive) {
  var callbackStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var callbackFinish = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var sepation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  actionable.addEventListener("click", function (e) {
    if (actionable.tagName === "A") e.preventDefault();
    smoothScroll(objetive, callbackStart, callbackFinish, sepation);
  });
};



/***/ }),

/***/ "./src/js/modules/scrollWidth.js":
/*!***************************************!*\
  !*** ./src/js/modules/scrollWidth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a css variable with scroll width
 */
var scrollWidth = function scrollWidth() {
  var getScrollBarWidth = innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scroll-bar", "".concat(getScrollBarWidth, "px"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollWidth);

/***/ }),

/***/ "./src/js/modules/stickyHeader.js":
/*!****************************************!*\
  !*** ./src/js/modules/stickyHeader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Sticky header
 * @param {HTMLElement} header element to stick
 */
var stickyHeader = function stickyHeader(header) {
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyHeader);

/***/ }),

/***/ "./src/js/services/unplashService.js":
/*!*******************************************!*\
  !*** ./src/js/services/unplashService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Get Unplash photos by search
 * @param {String} category query to search
 * @param {Number} page number of the page
 * @returns
 */
var unplashService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var category,
        page,
        results,
        clientId,
        endpoint,
        request,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            category = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
            results = [];
            clientId = "client_id=YPySjMNO1ZFcmg4unAgc--N9CJOhdaq2q9LdxhVIYVI";
            endpoint = category ? "https://api.unsplash.com/search/collections/?".concat(clientId, "&query=").concat(category) : "https://api.unsplash.com/photos/?".concat(clientId);
            _context.next = 7;
            return fetch("".concat(endpoint, "&page=").concat(page), {
              headers: {
                SameSite: "None"
              }
            });

          case 7:
            request = _context.sent;
            _context.next = 10;
            return request.json();

          case 10:
            results = _context.sent;
            if (category) results = results.results; // Order data

            results.map(function (el, ind) {
              var _el$user = el.user,
                  first_name = _el$user.first_name,
                  last_name = _el$user.last_name;
              var data = el.cover_photo ? el.cover_photo : el;
              var image = {
                url: data.urls.small,
                alt: data.alt_description
              };
              var user = {
                first_name: first_name,
                last_name: last_name,
                url: el.user.links.html
              };
              results[ind] = {
                image: image,
                user: user
              };
            });
            return _context.abrupt("return", results);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function unplashService() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unplashService);

/***/ }),

/***/ "./src/js/templates/galleryTemplate.jsx":
/*!**********************************************!*\
  !*** ./src/js/templates/galleryTemplate.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Create template for new projects
 * @param {Array} data unplash data collection
 * @param {String} category query to search
 * @returns Array with HTMLElements
 */
var galleryTemplate = function galleryTemplate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var itemsTemplate = [];
  var columns = [3, 4, 3];
  columns = columns.sort(function () {
    return Math.random() - 0.5;
  });
  var galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  for (var i = 0; i < data.length; i++) {
    var _data$i = data[i],
        image = _data$i.image,
        user = _data$i.user;
    var project = document.createElement('figure');
    project.classList.add('project', 'fadeIn');
    var projectTemplate = "\n      <img src=\"".concat(image.url, "\" alt=\"").concat(image.alt, "\" class=\"responsive-image\">\n      <figcaption class=\"project__overlay\">\n        ").concat(category ? "<h3>".concat(category, "</h3>") : '', "\n        <hr>\n        <p> By\n          <a target=\"_blank\" href=\"").concat(user.url, "?utm_source=sneak_creative_test&utm_medium=referral\" alt=\"").concat(user.first_name, " ").concat(user.last_name, "\">").concat(user.first_name, " ").concat(user.last_name, "</a>\n          in Unplash\n        </p>\n      </figcaption>\n    ");
    project.insertAdjacentHTML('beforeend', projectTemplate);
    itemsTemplate[i] = project;
  }

  return itemsTemplate;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (galleryTemplate);

/***/ }),

/***/ "./src/js/utilities/clases.js":
/*!************************************!*\
  !*** ./src/js/utilities/clases.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clases = {
  class1: 'is-open',
  class2: 'is-active'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clases);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/index": 0,
/******/ 			"css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksneakcreativeportafolio"] = self["webpackChunksneakcreativeportafolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/scss/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;