"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmDialog = _react2.default.createClass({
	displayName: "ConfirmDialog",

	getDefaultProps: function getDefaultProps() {
		return {
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
			"div",
			{ className: "react-confirm-dialog-bg" },
			_react2.default.createElement(
				"div",
				{ className: "react-confirm-dialog-content" },
				_react2.default.createElement(
					"p",
					null,
					this.props.confirmMessage
				),
				_react2.default.createElement(
					"button",
					{ className: "react-confirm-dialog-button confirm", onClick: this.executeAction },
					this.props.confirmText
				),
				_react2.default.createElement(
					"button",
					{ className: "react-confirm-dialog-button cancel", onClick: this.props.cancel },
					this.props.cancelText
				)
			)
		);
	}
});

exports.default = ConfirmDialog;