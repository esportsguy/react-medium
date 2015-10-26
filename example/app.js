require('../lib/medium.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Medium = require('../lib/medium');

var App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div className="app">
        <h1>react-medium</h1>
        <Medium/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
