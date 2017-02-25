import React from 'react';
import ReactDOM from 'react-dom';

/* Based on: http://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions */
var Portal = React.createClass({
  render: () => null,
  portalElement: null,
  componentDidMount() {
    var portal = document.createElement('div');
        document.body.appendChild(portal);
    this.portalElement = portal;
    this.componentDidUpdate();
  },
  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  },
  componentDidUpdate() {
    ReactDOM.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
  }
});

export default Portal;