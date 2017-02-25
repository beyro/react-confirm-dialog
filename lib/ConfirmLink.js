'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConfirmDialog = require('./ConfirmDialog');

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

var _Portal = require('./Portal.js');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Confirm.css');

var ConfirmLink = _react2.default.createClass({
	displayName: 'ConfirmLink',

	getInitialState: function getInitialState() {
		return { showConfirm: false };
	},
	getDefaultProps: function getDefaultProps() {
		return {
			action: function action() {
				return false;
			},
			confirmMessage: 'Are you sure that you want to do this?',
			confirmText: 'Yes please',
			cancelText: 'No thank you'
		};
	},
	showHideConfirm: function showHideConfirm() {
		this.setState({ showConfirm: !this.state.showConfirm });
	},
	render: function render() {
		return _react2.default.createElement(
			'span',
			{ className: 'ReactConfirmLink', onClick: this.showHideConfirm },
			this.props.children,
			this.state.showConfirm ? _react2.default.createElement(
				_Portal2.default,
				null,
				_react2.default.createElement(
					'div',
					{ className: 'ReactConfirmDialog' },
					_react2.default.createElement(_ConfirmDialog2.default, _extends({}, this.props, {
						cancel: this.showHideConfirm
					}))
				)
			) : ''
		);
	}
});

exports.default = ConfirmLink;