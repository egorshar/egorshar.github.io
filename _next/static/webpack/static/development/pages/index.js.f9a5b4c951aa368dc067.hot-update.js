webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_instagram__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/instagram */ "./utils/instagram.js");







var _jsxFileName = "/Users/egorshar/Desktop/egorshar/components/Gallery.js";









var InstagramPosts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InstagramPosts, _Component);

  function InstagramPosts() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InstagramPosts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InstagramPosts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      posts: [],
      index: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InstagramPosts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["default"])().then(function (posts) {
        return _this2.setState({
          posts: posts
        });
      });
    }
  }, {
    key: "loader",
    value: function loader() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: 580,
        width: 400,
        speed: 2,
        primaryColor: "#f3f3f3",
        secondaryColor: "#ecebeb",
        style: {
          width: 500
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        cx: "100",
        cy: "7",
        r: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
        x: "1",
        y: "1",
        rx: "0",
        ry: "0",
        width: "416",
        height: "496",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
        x: "1",
        y: "519",
        rx: "0",
        ry: "0",
        width: "272",
        height: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "image",
    value: function image(children, post) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        key: post.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["generatePostURL"])(post.shortcode),
        target: "_blank",
        rel: "nofollow noopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(post, 'edge_media_to_caption.edges[0].node.text', Object(_utils_instagram__WEBPACK_IMPORTED_MODULE_13__["generatePostURL"])(post.shortcode)))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          posts = _this$state.posts,
          index = _this$state.index;

      if (!posts.length) {
        return this.loader();
      }

      var post = posts[index];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2918406474" + " " + "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        key: post.id,
        src: post.display_url,
        alt: "",
        className: "portrait",
        container: function container(children) {
          return _this3.image(children, post);
        },
        loaderContainer: function loaderContainer(children) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, children);
        },
        loader: this.loader(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2918406474",
        __self: this
      }, ".gallery.jsx-2918406474{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.gallery.jsx-2918406474 img{width:500px;border-radius:4px;box-shadow:0px 0px 30px 0px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBR3lCLEFBTUEsWUFMQyxBQU1LLGtCQUMyQiw2Q0FDL0MsV0FQd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0J1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IHsgRnJhZ21lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInXG5pbXBvcnQgSW1nIGZyb20gJ3JlYWN0LWltYWdlJ1xuXG5pbXBvcnQgZ2V0SW5zdGFncmFtUG9zdHMsIHsgZ2VuZXJhdGVQb3N0VVJMIH0gZnJvbSAnLi4vdXRpbHMvaW5zdGFncmFtJ1xuXG5jbGFzcyBJbnN0YWdyYW1Qb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBvc3RzOiBbXSxcbiAgICBpbmRleDogMFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZ2V0SW5zdGFncmFtUG9zdHMoKVxuICAgICAgLnRoZW4ocG9zdHMgPT4gdGhpcy5zZXRTdGF0ZSh7IHBvc3RzIH0pKVxuICB9XG5cbiAgbG9hZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudExvYWRlclxuICAgICAgICBoZWlnaHQ9ezU4MH1cbiAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgc3BlZWQ9ezJ9XG4gICAgICAgIHByaW1hcnlDb2xvcj1cIiNmM2YzZjNcIlxuICAgICAgICBzZWNvbmRhcnlDb2xvcj1cIiNlY2ViZWJcIlxuICAgICAgICBzdHlsZT17e3dpZHRoOiA1MDB9fVxuICAgICAgPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTAwXCIgY3k9XCI3XCIgcj1cIjFcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMVwiIHk9XCIxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI0MTZcIiBoZWlnaHQ9XCI0OTZcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMVwiIHk9XCI1MTlcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI3MlwiIGhlaWdodD1cIjE2XCIgLz5cbiAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICApXG4gIH1cblxuICBpbWFnZShjaGlsZHJlbiwgcG9zdCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGhyZWY9e2dlbmVyYXRlUG9zdFVSTChwb3N0LnNob3J0Y29kZSl9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyXCI+XG4gICAgICAgICAgICB7Z2V0KHBvc3QsICdlZGdlX21lZGlhX3RvX2NhcHRpb24uZWRnZXNbMF0ubm9kZS50ZXh0JywgZ2VuZXJhdGVQb3N0VVJMKHBvc3Quc2hvcnRjb2RlKSl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBvc3RzLCBpbmRleCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFwb3N0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRlcigpXG4gICAgfVxuXG4gICAgY29uc3QgcG9zdCA9IHBvc3RzW2luZGV4XTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cbiAgICAgICAgPEltZ1xuICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICBzcmM9e3Bvc3QuZGlzcGxheV91cmx9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0cmFpdFwiXG4gICAgICAgICAgY29udGFpbmVyPXtjaGlsZHJlbiA9PiB0aGlzLmltYWdlKGNoaWxkcmVuLCBwb3N0KX1cbiAgICAgICAgICBsb2FkZXJDb250YWluZXI9e2NoaWxkcmVuID0+IChcbiAgICAgICAgICAgIDw+e2NoaWxkcmVufTwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbG9hZGVyPXt0aGlzLmxvYWRlcigpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ2FsbGVyeSB7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ2FsbGVyeSA6Z2xvYmFsKGltZykge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbVBvc3RzO1xuIl19 */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/Gallery.js */"));
    }
  }]);

  return InstagramPosts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InstagramPosts);

/***/ })

})
//# sourceMappingURL=index.js.f9a5b4c951aa368dc067.hot-update.js.map