
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(540);

var _store = __webpack_require__(548);

var _Page = __webpack_require__(547);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\tech-radar-mobx\\pages\\index.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  (0, _createClass3.default)(Counter, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(isServer);
      return { lastUpdate: store.lastUpdate, isServer: isServer };
    }
  }]);

  function Counter(props) {
    (0, _classCallCheck3.default)(this, Counter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

    _this.store = (0, _store.initStore)(props.isServer, props.lastUpdate);
    return _this;
  }

  (0, _createClass3.default)(Counter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_Page2.default, { title: 'Index Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return Counter;
}(_react2.default.Component);

exports.default = Counter;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\react\\tech-radar-mobx\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\react\\tech-radar-mobx\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(549);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\tech-radar-mobx\\components\\Clock.js';

exports.default = function (props) {
  return _react2.default.createElement('div', { className: props.light ? 'light' : '', 'data-jsx': 820628782,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, format(new Date(props.lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: 820628782,
    css: 'div[data-jsx="820628782"]{padding:15px;color:#82FA58;display:inline-block;font:50px menlo, monaco, monospace;background-color:#000}.light[data-jsx="820628782"]{background-color:#999}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQixBQUd3QixBQUVTLGNBRmdCLFNBRVAsTUFGdUMsc0JBQThDLG9DQUFpQyx1QkFBUyIsImZpbGUiOiJjb21wb25lbnRzXFxDbG9jay5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZWFjdC90ZWNoLXJhZGFyLW1vYngiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmxpZ2h0ID8gJ2xpZ2h0JyA6ICcnfT5cclxuICAgICAge2Zvcm1hdChuZXcgRGF0ZShwcm9wcy5sYXN0VXBkYXRlKSl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGNvbG9yOiAjODJGQTU4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcclxuXHJcbmNvbnN0IHBhZCA9IG4gPT4gbiA8IDEwID8gYDAke259YCA6IG5cclxuIl19 */\n/*@ sourceURL=components\\Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\react\\tech-radar-mobx\\components\\Clock.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\react\\tech-radar-mobx\\components\\Clock.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

var _mobxReact = __webpack_require__(540);

var _Clock = __webpack_require__(546);

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = 'D:\\react\\tech-radar-mobx\\components\\Page.js';

var Page = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.title), _react2.default.createElement(_Clock2.default, { lastUpdate: this.props.store.lastUpdate, light: this.props.store.light, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_link2.default, { href: this.props.linkTo, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Navigate'))));
    }
  }]);

  return Page;
}(_react2.default.Component)) || _class) || _class);

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\react\\tech-radar-mobx\\components\\Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\react\\tech-radar-mobx\\components\\Page.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = initStore;

var _defineProperty = __webpack_require__(146);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mobx = __webpack_require__(541);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;

  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var store = null;

var Store = (_class = function Store(isServer, lastUpdate) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Store);

  _initDefineProp(this, 'lastUpdate', _descriptor, this);

  _initDefineProp(this, 'light', _descriptor2, this);

  _initDefineProp(this, 'start', _descriptor3, this);

  this.stop = function () {
    return clearInterval(_this.timer);
  };

  this.lastUpdate = lastUpdate;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'lastUpdate', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'light', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'start', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.timer = setInterval(function () {
        _this2.lastUpdate = Date.now();
        _this2.light = true;
      });
    };
  }
})), _class);

function initStore(isServer) {
  var lastUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\react\\tech-radar-mobx\\store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\react\\tech-radar-mobx\\store.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ })

},[550]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWMzYzFlNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Nsb2NrLmpzPzVjM2MxZTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzPzVjM2MxZTUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NWMzYzFlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnbW9ieC1yZWFjdCdcclxuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcclxuICAgIGNvbnN0IGlzU2VydmVyID0gISFyZXFcclxuICAgIGNvbnN0IHN0b3JlID0gaW5pdFN0b3JlKGlzU2VydmVyKVxyXG4gICAgcmV0dXJuIHsgbGFzdFVwZGF0ZTogc3RvcmUubGFzdFVwZGF0ZSwgaXNTZXJ2ZXIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RvcmUgPSBpbml0U3RvcmUocHJvcHMuaXNTZXJ2ZXIsIHByb3BzLmxhc3RVcGRhdGUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cclxuICAgICAgICA8UGFnZSB0aXRsZT0nSW5kZXggUGFnZScgbGlua1RvPScvb3RoZXInIC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5saWdodCA/ICdsaWdodCcgOiAnJ30+XHJcbiAgICAgIHtmb3JtYXQobmV3IERhdGUocHJvcHMubGFzdFVwZGF0ZSkpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQ6IDUwcHggbWVubG8sIG1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBmb3JtYXQgPSB0ID0+IGAke3BhZCh0LmdldFVUQ0hvdXJzKCkpfToke3BhZCh0LmdldFVUQ01pbnV0ZXMoKSl9OiR7cGFkKHQuZ2V0VVRDU2Vjb25kcygpKX1gXHJcblxyXG5jb25zdCBwYWQgPSBuID0+IG4gPCAxMCA/IGAwJHtufWAgOiBuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2xvY2suanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xyXG5cclxuQGluamVjdCgnc3RvcmUnKSBAb2JzZXJ2ZXJcclxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5zdG9yZS5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLnN0b3JlLnN0b3AoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPENsb2NrIGxhc3RVcGRhdGU9e3RoaXMucHJvcHMuc3RvcmUubGFzdFVwZGF0ZX0gbGlnaHQ9e3RoaXMucHJvcHMuc3RvcmUubGlnaHR9IC8+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3RoaXMucHJvcHMubGlua1RvfT48YT5OYXZpZ2F0ZTwvYT48L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BhZ2UuanMiLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tICdtb2J4J1xyXG5cclxubGV0IHN0b3JlID0gbnVsbFxyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gIEBvYnNlcnZhYmxlIGxhc3RVcGRhdGUgPSAwXHJcbiAgQG9ic2VydmFibGUgbGlnaHQgPSBmYWxzZVxyXG5cclxuICBjb25zdHJ1Y3RvciAoaXNTZXJ2ZXIsIGxhc3RVcGRhdGUpIHtcclxuICAgIHRoaXMubGFzdFVwZGF0ZSA9IGxhc3RVcGRhdGVcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gc3RhcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpXHJcbiAgICAgIHRoaXMubGlnaHQgPSB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RvcCA9ICgpID0+IGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZSAoaXNTZXJ2ZXIsIGxhc3RVcGRhdGUgPSBEYXRlLm5vdygpKSB7XHJcbiAgaWYgKGlzU2VydmVyICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JlKGlzU2VydmVyLCBsYXN0VXBkYXRlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoc3RvcmUgPT09IG51bGwpIHtcclxuICAgICAgc3RvcmUgPSBuZXcgU3RvcmUoaXNTZXJ2ZXIsIGxhc3RVcGRhdGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RvcmVcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7OztBQWZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7Ozs7OztBQURBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWlCQTtBQWpCQTtBQUZBO0FBQ0E7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBZkE7QUFDQTtBQXFCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7Ozs7Ozs7OztBQXZCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFVQTtBQUFBO0FBVkE7QUFDQTtBQURBO0FBSkE7OztBQUFBOztBQUNBOzs7QUFBQTs7QUFNQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        