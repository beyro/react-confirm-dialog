import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmLink from '../lib/ConfirmLink.js';
require('../lib/Confirm.css');

ConfirmLink.defaultProps.confirmMessage = 'Are you sure you want to change the colors?';
var ExampleApp = React.createClass({
	getInitialState: function() {
		return {
			bgColor: '#ffffff',
			border: 'none'
			};
	},
	makeItUgly: function(args) {
		this.setState({bgColor:args.backgroundColor, border:args.border});
	},
	makeItNice: function() {
		this.setState({bgColor:'#ffffff', border:'none'});
	},
	render: function() {
	  let ugly = (this.state.bgColor !== '#ffffff'),
			action = (ugly) ? this.makeItNice : this.makeItUgly;
	  return (
			<div style={{backgroundColor:this.state.bgColor, border:this.state.border, padding:'30px'}}>
				<h1>Basic Example</h1>
				<ConfirmLink 
				  action={action}
				  actionArgs={{'backgroundColor':'cornflowerblue', 'border':'2px solid red'}}
				  
				>
					<a href="#">{(ugly) ? 'Make it nice' : 'Make it ugly'}</a>
				</ConfirmLink>
			</div>
	  );
	}
});


ReactDOM.render(
  <ExampleApp />,
  document.getElementById('root')
);