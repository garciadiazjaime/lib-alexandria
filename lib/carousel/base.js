'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _svg = require('../svg');

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'getIndicators',
    value: function getIndicators(sliderId, isVisible, data, style) {
      var indicators = [];
      var classNames = style || {};
      if (isVisible !== false && _lodash2.default.isArray(data) && data.length) {
        var _ret = function () {
          var activeClassName = classNames && classNames.active ? 'active ' + classNames.active : 'active';
          indicators = data.map(function (item, index) {
            var className = index === 0 ? activeClassName : '';
            return _react2.default.createElement('li', { 'data-target': '#' + sliderId, 'data-slide-to': index, className: className, key: index });
          });
          return {
            v: _react2.default.createElement(
              'ol',
              { className: 'carousel-indicators ' + (classNames.base || '') },
              indicators
            )
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      return null;
    }
  }, {
    key: 'getControls',
    value: function getControls(sliderId, isVisible, classNames) {
      var base = classNames.base;
      var prev = classNames.prev;
      var next = classNames.next;
      var arrow = classNames.arrow;

      if (isVisible !== false) {
        return _react2.default.createElement(
          'div',
          { className: 'carousel-controls' },
          _react2.default.createElement(
            'a',
            { className: 'left carousel-control ' + (base || '') + ' ' + (prev || ''), href: '#' + sliderId, role: 'button', 'data-slide': 'prev' },
            _react2.default.createElement(_svg2.default, { network: 'carousel_left', className: arrow }),
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Previous'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'right carousel-control ' + (base || '') + ' ' + (next || ''), href: '#' + sliderId, role: 'button', 'data-slide': 'next' },
            _react2.default.createElement(_svg2.default, { network: 'carousel_right', className: arrow }),
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Next'
            )
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var interval = _props.interval;
      var children = _props.children;
      var indicators = _props.indicators;
      var controls = _props.controls;
      var classNames = _props.classNames;

      return _react2.default.createElement(
        'div',
        { id: id, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': interval || 8000 },
        this.getIndicators(id, indicators, children, classNames.indicator),
        _react2.default.createElement(
          'div',
          { className: 'carousel-inner ' + (classNames.inner || ''), role: 'listbox' },
          children
        ),
        this.getControls(id, controls, classNames.controls)
      );
    }
  }]);

  return Carousel;
}(_react2.default.Component);

exports.default = Carousel;


Carousel.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  interval: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.any,
  indicators: _react2.default.PropTypes.bool,
  controls: _react2.default.PropTypes.bool,
  classNames: _react2.default.PropTypes.object
};