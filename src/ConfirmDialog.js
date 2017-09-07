import React from 'react';

var ConfirmDialog = React.createClass({
	getDefaultProps: function() {
		return {
			asHtml: false,
			cancel: function() { return; }
		};
	},
	executeAction: function() {
		let result = this.props.action(this.props.actionArgs);
		this.props.cancel();
		return result;
	},
	render: function() {
		console.log(this.props)
		return (
			<div className="react-confirm-dialog-bg">
				<div className="react-confirm-dialog-content">
				  {this.props.asHtml == true &&
						<div dangerouslySetInnerHTML={{__html: this.props.confirmMessage}} />}
					{this.props.asHtml == false
						&& <p>{this.props.confirmMessage}</p>}
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
