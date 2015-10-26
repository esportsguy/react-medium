require('../lib/medium.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Medium = require('../lib/medium');

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      audio: {
        mime: 'audio/mpeg3',
        src: 'test.mp3'
      },
      video: {
        mime: 'video/mpeg',
        src: 'https://d301dinc95ec5f.cloudfront.net/capture/dreamhackcs-20150920202118125.shot.mp4'
      }
    }
  },

  render() {
    return (
      <div className="app">
        <h1>react-medium</h1>
        <Medium medium={this.state.audio}/>
        <Medium medium={this.state.video}/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
