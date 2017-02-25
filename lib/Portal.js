'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on: http://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions */
var Portal = _react2.default.createClass({
  displayName: 'Portal',

  render: function render() {
    return null;
  },
  portalElement: null,
  componentDidMount: function componentDidMount() {
    var portal = document.createElement('div');
    document.body.appendChild(portal);
    this.portalElement = portal;
    this.componentDidUpdate();
  },
  componentWillUnmount: function componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  },
  componentDidUpdate: function componentDidUpdate() {
    _reactDom2.default.render(_react2.default.createElement(
      'div',
      this.props,
      this.props.children
    ), this.portalElement);
  }
});

exports.default = Portal;