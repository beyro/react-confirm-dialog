import React from 'react';
var createReactClass = require('create-react-class');

var ConfirmDialog = createReactClass({
	getDefaultProps: function() {
		return {
			asHtml: false,
			confirmClasses: 'react-confirm-dialog-button confirm',
			cancelClasses: 'react-confirm-dialog-button cancel',
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
				  {this.props.asHtml == true &&
						<div dangerouslySetInnerHTML={{__html: this.props.confirmMessage}} />}
					{this.props.asHtml == false
						&& <p>{this.props.confirmMessage}</p>}
					<button className={this.props.confirmClasses} onClick={this.executeAction}>
						{this.props.confirmText}
					</button>
					<button className={this.props.cancelClasses} onClick={this.props.cancel}>
						{this.props.cancelText}
					</button>
				</div>
			</div>
		);
	}
});

export default ConfirmDialog;
