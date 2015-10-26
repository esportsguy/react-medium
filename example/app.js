var React = require('react');
var ReactDOM = require('react-dom');
var Medium = require('../lib/medium');

var App = React.createClass({
  displayName: 'App',

  render() {
    <Medium/>
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
