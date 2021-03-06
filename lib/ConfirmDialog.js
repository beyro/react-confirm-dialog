'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReactClass = require('create-react-class');

var ConfirmDialog = createReactClass({
	displayName: 'ConfirmDialog',

	getDefaultProps: function getDefaultProps() {
		return {
			asHtml: false,
			confirmClasses: 'react-confirm-dialog-button confirm',
			cancelClasses: 'react-confirm-dialog-button cancel',
			cancel: function cancel() {
				return;
			}
		};
	},
	executeAction: function executeAction() {
		var result = this.props.action(this.props.actionArgs);
		this.props.cancel();
		return result;
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'react-confirm-dialog-bg' },
			_react2.default.createElement(
				'div',
				{ className: 'react-confirm-dialog-content' },
				this.props.asHtml == true && _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.confirmMessage } }),
				this.props.asHtml == false && _react2.default.createElement(
					'p',
					null,
					this.props.confirmMessage
				),
				_react2.default.createElement(
					'button',
					{ className: this.props.confirmClasses, onClick: this.executeAction },
					this.props.confirmText
				),
				'\xA0',
				_react2.default.createElement(
					'button',
					{ className: this.props.cancelClasses, onClick: this.props.cancel },
					this.props.cancelText
				)
			)
		);
	}
});

exports.default = ConfirmDialog;