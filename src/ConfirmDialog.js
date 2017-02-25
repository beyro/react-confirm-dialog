import React from 'react';

var ConfirmDialog = React.createClass({
	getDefaultProps: function() {
		return {
			cancel: function() { return; }
		};
	},
	executeAction: function() {
		let result = this.props.action(this.props.actionArgs);
		this.props.cancel();
		return result;
	},
	render: function() {
		return (
			<div className="react-confirm-dialog-bg">
				<div className="react-confirm-dialog-content">
					<p>{this.props.confirmMessage}</p>
					<button className="react-confirm-dialog-button confirm" onClick={this.executeAction}>
						{this.props.confirmText}
					</button>
					<button className="react-confirm-dialog-button cancel" onClick={this.props.cancel}>
						{this.props.cancelText}
					</button>
				</div>
			</div>
		);
	}
});

export default ConfirmDialog;