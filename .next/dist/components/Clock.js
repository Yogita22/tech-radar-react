'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

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