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
    key: "onImageClick",
    value: function onImageClick() {
      var _this$state = this.state,
          posts = _this$state.posts,
          index = _this$state.index;
      var nextIndex = index + 1;
      if (nextIndex > posts.length - 1) nextIndex = 0;
      this.setState({
        index: nextIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          posts = _this$state2.posts,
          index = _this$state2.index;

      if (!posts.length) {
        return this.loader();
      }

      var post = posts[index];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-494454688" + " " + "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        key: post.id,
        src: post.display_url,
        alt: "",
        className: "portrait",
        onClick: this.onImageClick.bind(this),
        container: function container(children) {
          return _this3.image(children, post);
        },
        loaderContainer: function loaderContainer(children) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, children);
        },
        loader: this.loader(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "jsx-494454688" + " " + "next-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u23E9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "494454688",
        __self: this
      }, ".gallery.jsx-494454688{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.gallery.jsx-494454688 img{width:500px;border-radius:4px;box-shadow:0px 0px 30px 0px rgba(0,0,0,0.15);cursor:e-resize;}.next-slide.jsx-494454688{border:0;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ29yc2hhci9EZXNrdG9wL2Vnb3JzaGFyL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBR3lCLEFBTUEsQUFPSCxTQUNPLEdBYkgsQUFNSyxhQVFwQixLQVArQyw2Q0FDN0IsV0FQTSxLQVF4Qix5RUFQQSIsImZpbGUiOiIvVXNlcnMvZWdvcnNoYXIvRGVza3RvcC9lZ29yc2hhci9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250ZW50TG9hZGVyIGZyb20gJ3JlYWN0LWNvbnRlbnQtbG9hZGVyJ1xuaW1wb3J0IEltZyBmcm9tICdyZWFjdC1pbWFnZSdcblxuaW1wb3J0IGdldEluc3RhZ3JhbVBvc3RzLCB7IGdlbmVyYXRlUG9zdFVSTCB9IGZyb20gJy4uL3V0aWxzL2luc3RhZ3JhbSdcblxuY2xhc3MgSW5zdGFncmFtUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwb3N0czogW10sXG4gICAgaW5kZXg6IDBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGdldEluc3RhZ3JhbVBvc3RzKClcbiAgICAgIC50aGVuKHBvc3RzID0+IHRoaXMuc2V0U3RhdGUoeyBwb3N0cyB9KSlcbiAgfVxuXG4gIGxvYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRMb2FkZXJcbiAgICAgICAgaGVpZ2h0PXs1ODB9XG4gICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgIHNwZWVkPXsyfVxuICAgICAgICBwcmltYXJ5Q29sb3I9XCIjZjNmM2YzXCJcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I9XCIjZWNlYmViXCJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogNTAwfX1cbiAgICAgID5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwMFwiIGN5PVwiN1wiIHI9XCIxXCIgLz5cbiAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiMVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNDE2XCIgaGVpZ2h0PVwiNDk2XCIgLz5cbiAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiNTE5XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNzJcIiBoZWlnaHQ9XCIxNlwiIC8+XG4gICAgICA8L0NvbnRlbnRMb2FkZXI+XG4gICAgKVxuICB9XG5cbiAgaW1hZ2UoY2hpbGRyZW4sIHBvc3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50IGtleT17cG9zdC5pZH0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPXtnZW5lcmF0ZVBvc3RVUkwocG9zdC5zaG9ydGNvZGUpfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub29wZW5lclwiPlxuICAgICAgICAgICAge2dldChwb3N0LCAnZWRnZV9tZWRpYV90b19jYXB0aW9uLmVkZ2VzWzBdLm5vZGUudGV4dCcsIGdlbmVyYXRlUG9zdFVSTChwb3N0LnNob3J0Y29kZSkpfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBvbkltYWdlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBwb3N0cywgaW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaWYgKG5leHRJbmRleCA+IHBvc3RzLmxlbmd0aCAtIDEpIG5leHRJbmRleCA9IDBcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogbmV4dEluZGV4IH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwb3N0cywgaW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghcG9zdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IHBvc3QgPSBwb3N0c1tpbmRleF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgc3JjPXtwb3N0LmRpc3BsYXlfdXJsfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9ydHJhaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25JbWFnZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgY29udGFpbmVyPXtjaGlsZHJlbiA9PiB0aGlzLmltYWdlKGNoaWxkcmVuLCBwb3N0KX1cbiAgICAgICAgICBsb2FkZXJDb250YWluZXI9e2NoaWxkcmVuID0+IChcbiAgICAgICAgICAgIDw+e2NoaWxkcmVufTwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbG9hZGVyPXt0aGlzLmxvYWRlcigpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dC1zbGlkZVwiPuKPqTwvYnV0dG9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ2FsbGVyeSB7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ2FsbGVyeSA6Z2xvYmFsKGltZykge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmV4dC1zbGlkZSB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbVBvc3RzO1xuIl19 */\n/*@ sourceURL=/Users/egorshar/Desktop/egorshar/components/Gallery.js */"));
    }
  }]);

  return InstagramPosts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InstagramPosts);

/***/ })

})
//# sourceMappingURL=index.js.6e17acb862160d5228cb.hot-update.js.map