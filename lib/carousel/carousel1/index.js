'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel1 = function (_React$Component) {
  _inherits(Carousel1, _React$Component);

  function Carousel1() {
    _classCallCheck(this, Carousel1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel1).apply(this, arguments));
  }

  _createClass(Carousel1, [{
    key: 'renderItems',
    value: function renderItems(data, classNames) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          var className = index === 0 ? 'active' : '';
          var imgUrl = item.image && item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
          return _react2.default.createElement(
            'div',
            { className: 'item ' + className + ' ' + (classNames.item || ''), key: index },
            _react2.default.createElement(
              'div',
              { className: classNames.imgContainer },
              _react2.default.createElement('img', { src: imgUrl, alt: item.description }),
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: item.url, title: item.title },
                  item.title
                )
              ),
              _react2.default.createElement('h4', { dangerouslySetInnerHTML: { __html: item.description } })
            )
          );
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var id = _props.id;
      var interval = _props.interval;
      var classNames = _props.classNames;
      var indicators = _props.indicators;
      var controls = _props.controls;

      return _react2.default.createElement(
        _base2.default,
        { id: id, interval: interval, classNames: classNames },
        this.renderItems(data, classNames)
      );
    }
  }]);

  return Carousel1;
}(_react2.default.Component);

exports.default = Carousel1;


Carousel1.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  data: _react2.default.PropTypes.array.isRequired,
  classNames: _react2.default.PropTypes.object.isRequired,
  interval: _react2.default.PropTypes.number,
  indicators: _react2.default.PropTypes.bool,
  controls: _react2.default.PropTypes.bool
};